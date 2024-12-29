import * as fsp from "fs/promises";

import { createAppSlice } from "../base/reduxHelpers";
import {
  doDownloadMedia,
  getDefaultMediaPath,
  LocalMediaItem,
  MediaDownloadState,
  scanLocalMedia,
} from "./mediaManagement";
import { AppState } from "../store";
import { setSetting } from "../base/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { listenOnStore } from "../storeListener";
import invariant from "../../common/invariant";
import { getSelectedShow } from "../base/selectedShow";
import { serverAPI } from "../base/serverApiClient";
import { getLogger } from "../base/logging";
import { isAfter } from "date-fns";

const logger = getLogger("localMedia/state");

interface DownloadQueueItem {
  mediaID: number;
  name?: string;
  status: MediaDownloadState;
  progressPercent?: number;
  error?: string;
}

const initialise = createAsyncThunk(
  "localMedia/loadLocalMedia",
  async (_, thunkAPI) => {
    const settings = (thunkAPI.getState() as AppState).settings;
    let mediaPath = settings.media.mediaPath;
    if (!mediaPath) {
      mediaPath = getDefaultMediaPath();
      thunkAPI.dispatch(setSetting("media", "mediaPath", mediaPath));
    }
    await fsp.mkdir(mediaPath, { recursive: true });
    const media = await scanLocalMedia(mediaPath);
    return media;
  },
);

const downloadMedia = createAsyncThunk(
  "localMedia/downloadMedia",
  async (task: { mediaID: number }, thunkAPI) => {
    const state = thunkAPI.getState() as AppState;
    const mediaPath = state.settings.media.mediaPath;
    if (!mediaPath) {
      throw new Error("Media path not set");
    }
    const { outputPath, sizeBytes } = await doDownloadMedia(
      task,
      mediaPath,
      (state, progress, name) => {
        thunkAPI.dispatch(
          localMediaState.actions.downloadProgress({
            mediaID: task.mediaID,
            state,
            progress,
            name,
          }),
        );
      },
    );
    return { mediaID: task.mediaID, path: outputPath, sizeBytes };
  },
);

const deleteOldMedia = createAsyncThunk(
  "localMedia/deleteOldMedia",
  async (payload: { minAgeDays: number }, thunkAPI) => {
    const state = thunkAPI.getState() as AppState;
    const localMedia = state.localMedia.media;
    const currentShow = state.selectedShow.show;
    let notInUse;
    if (currentShow) {
      const inUse = new Set<number>();
      currentShow?.continuityItems.forEach((x) => {
        if (x.media) {
          inUse.add(x.media.id);
        }
      });
      currentShow?.rundowns.forEach((x) =>
        x.items.forEach((y) => {
          if (y.media) {
            inUse.add(y.media.id);
          }
        }),
      );
      notInUse = localMedia.filter((x) => !inUse.has(x.mediaID));
    } else {
      notInUse = localMedia;
    }
    const mediaObjects = await serverAPI().media.bulkGet.query(
      notInUse.map((x) => x.mediaID),
    );
    const deletedIDs = [];
    for (const result of mediaObjects) {
      logger.debug("Deletion candidate", result);
      if (result.state !== "Ready") {
        continue;
      }
      const latestShowDate = [
        result.rundownItems.map((x) => x.rundown.show.start),
        result.continuityItems.map((x) => x.show.start),
        result.assets.map((x) => x.rundown.show.start),
      ]
        .flat()
        .reduce((a, b) => (isAfter(a, b) ? a : b), new Date(0));
      invariant(
        latestShowDate.getTime() !== 0,
        "no rundown, continuity item, or asset for media " + result.id,
      );
      const age =
        (Date.now() - latestShowDate.getTime()) / (1000 * 60 * 60 * 24);
      logger.debug(
        result.id,
        result.name,
        "age",
        age,
        "threshold",
        payload.minAgeDays,
      );
      if (age > payload.minAgeDays) {
        logger.debug("Deleting", result.id);
        const path = localMedia.find((x) => x.mediaID === result.id)?.path;
        if (!path) {
          throw new Error(`Media ${result.id} not found`);
        }
        deletedIDs.push(result.id);
        // TODO: We delete it on disk before removing it from state. In theory this is
        // safe because of the notInUse check, but it's a bit risky. We should remove
        // it from the state, then delete from disk.
        await fsp.unlink(path);
        logger.info("Deleted", path);
      }
    }
    return deletedIDs;
  },
);

const localMediaState = createAppSlice({
  name: "localMedia",
  initialState: {
    media: [] as LocalMediaItem[],
    downloadQueue: [] as DownloadQueueItem[],
    currentDownload: null as DownloadQueueItem | null,
    failedDownloads: [] as DownloadQueueItem[],
  },
  reducers: {
    queueMediaDownload(state, action: PayloadAction<{ mediaID: number }>) {
      state.downloadQueue.push({
        mediaID: action.payload.mediaID,
        status: "pending",
      });
      if (state.currentDownload === null) {
        state.currentDownload = state.downloadQueue.shift() ?? null;
      }
    },
    queueMediaDownloads(state, action: PayloadAction<{ mediaIDs: number[] }>) {
      const alreadyPresent = new Set(
        state.downloadQueue
          .map((i) => i.mediaID)
          .concat(state.media.map((i) => i.mediaID)),
      );
      for (const mediaID of action.payload.mediaIDs) {
        if (!alreadyPresent.has(mediaID)) {
          state.downloadQueue.push({
            mediaID,
            status: "pending",
          });
        }
      }
      if (state.currentDownload === null) {
        state.currentDownload = state.downloadQueue.shift() ?? null;
      }
    },
    downloadAllMediaForSelectedShow(state) {
      const show = getSelectedShow();
      if (show === null) {
        return;
      }
      // This is all the media IDs for the current show
      const mediaIDs: number[] = [];
      for (const rundown of show.rundowns) {
        for (const item of rundown.items) {
          if (item.media) {
            mediaIDs.push(item.media.id);
          }
        }
        for (const asset of rundown.assets) {
          mediaIDs.push(asset.media.id);
        }
      }
      for (const continuityItem of show.continuityItems) {
        if (continuityItem.media) {
          mediaIDs.push(continuityItem.media.id);
        }
      }
      // All media that is either already downloaded or in the queue
      const alreadyPresent = new Set(
        state.downloadQueue
          .map((i) => i.mediaID)
          .concat(state.media.map((i) => i.mediaID)),
      );
      // Enqueue all the media that isn't already present
      for (const mediaID of mediaIDs) {
        if (!alreadyPresent.has(mediaID)) {
          state.downloadQueue.push({
            mediaID,
            status: "pending",
          });
        }
      }
    },
    downloadProgress(
      state,
      action: PayloadAction<{
        mediaID: number;
        state: MediaDownloadState;
        progress: number;
        name?: string;
      }>,
    ) {
      invariant(state.currentDownload, "No current download");
      invariant(
        state.currentDownload.mediaID === action.payload.mediaID,
        "Progress for unexpected media ID",
      );
      state.currentDownload.status = action.payload.state;
      state.currentDownload.progressPercent = action.payload.progress;
      state.currentDownload.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initialise.fulfilled, (state, action) => {
      state.media = action.payload;
    });
    builder.addCase(downloadMedia.fulfilled, (state, action) => {
      invariant(state.currentDownload, "No current download");
      invariant(
        state.currentDownload.mediaID === action.payload.mediaID,
        "Fulfilled for unexpected media ID",
      );
      state.media.push({
        mediaID: action.payload.mediaID,
        path: action.payload.path,
        sizeBytes: action.payload.sizeBytes,
      });
      state.currentDownload = state.downloadQueue.shift() ?? null;
    });
    builder.addCase(downloadMedia.rejected, (state, action) => {
      invariant(state.currentDownload, "No current download");
      invariant(
        state.currentDownload.mediaID === action.meta.arg.mediaID,
        "Fulfilled for unexpected media ID",
      );
      state.failedDownloads.push({
        mediaID: action.meta.arg.mediaID,
        status: "error",
        error: action.error.message,
      });
      state.currentDownload = state.downloadQueue.shift() ?? null;
    });
    builder.addCase(deleteOldMedia.fulfilled, (state, action) => {
      state.media = state.media.filter(
        (x) => !action.payload.includes(x.mediaID),
      );
    });
  },
});

// This effect handles starting downloads when they are queued
listenOnStore({
  predicate: (_, oldState, newState) =>
    oldState.localMedia.currentDownload?.mediaID !==
    newState.localMedia.currentDownload?.mediaID,
  effect: (_, api) => {
    const state = api.getState() as AppState;
    const nextItem = state.localMedia.currentDownload;
    if (!nextItem) {
      return;
    }
    api.dispatch(downloadMedia({ mediaID: nextItem.mediaID }));
  },
});

export const localMediaReducer = localMediaState.reducer;
export const localMediaActions = {
  initialise,
  queueMediaDownload: localMediaState.actions.queueMediaDownload,
  downloadAllMediaForSelectedShow:
    localMediaState.actions.downloadAllMediaForSelectedShow,
  deleteOldMedia,
};
