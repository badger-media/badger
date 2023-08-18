"use client";

import { Asset, AssetTypeSchema, Rundown } from "@bowser/prisma/types";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { AssetTypeType } from "@bowser/prisma/types/inputTypeSchemas/AssetTypeSchema";
import classNames from "classnames";
import Button from "@bowser/components/button";
import {
  IoAddCircleSharp,
  IoImageSharp,
  IoMusicalNoteSharp,
  IoTvSharp,
  IoVolumeMediumSharp,
} from "react-icons/io5";
import { IconType } from "react-icons/lib/cjs/iconBase";
import {
  MediaUploadDialog,
  MediaUploadDialogHandle,
} from "@/components/MediaUpload";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@bowser/components/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@bowser/components/popover";
import Spinner from "@/app/_assets/spinner.svg";
import Image from "next/image";
import { Media, MediaState } from "@bowser/prisma/client";
import {
  processAssetUpload,
  removeAsset,
} from "@/app/shows/[show_id]/rundown/[rundown_id]/assetsActions";
import { useRouter } from "next/navigation";

export interface RundownWithAssets extends Rundown {
  assets: (Asset & { media: Media })[];
}

const AssetColorClasses: { [K in AssetTypeType]: string } = {
  Still: "text-success-4",
  Graphic: "text-warning-4",
  SoundEffect: "text-purple-4",
  Music: "text-danger-4",
};

const AssetIcons: { [K in AssetTypeType]: IconType } = {
  Still: IoTvSharp,
  Graphic: IoImageSharp,
  SoundEffect: IoVolumeMediumSharp,
  Music: IoMusicalNoteSharp,
};

export default function RundownAssets(props: { rundown: RundownWithAssets }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState<AssetTypeType | "all">("all");
  const assets = props.rundown.assets.filter((asset) => {
    if (filter === "all") {
      return true;
    }
    return asset.type === filter;
  });
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [newUploadType, setNewUploadType] = useState<AssetTypeType | "$none">(
    "$none",
  );
  const uploadRef = useRef<MediaUploadDialogHandle>(null);

  // Periodically refresh if any assets are pending
  const refreshIntervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (
      props.rundown.assets.some(
        (asset) => asset.media.state !== MediaState.Ready,
      )
    ) {
      refreshIntervalRef.current = window.setInterval(() => {
        router.refresh();
      }, 2500);
    }
    return () => {
      if (refreshIntervalRef.current !== null) {
        window.clearInterval(refreshIntervalRef.current);
      }
    };
  }, [props.rundown.assets, router]);

  return (
    <div>
      <h2 className="text-xl">Assets</h2>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-1">
          <button
            onClick={() => setFilter("all")}
            className={classNames(
              "text-primary-4",
              filter === "all" && "font-black uppercase",
            )}
          >
            All
          </button>
          {AssetTypeSchema.options.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={classNames(
                AssetColorClasses[option],
                filter === option && "font-black uppercase",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          {assets.map((asset) => {
            let icon;
            if (asset.media.state !== MediaState.Ready) {
              icon = <Image src={Spinner} alt="" className="inline-block" />;
            } else {
              const Icon = AssetIcons[asset.type];
              icon = (
                <Icon
                  className={classNames(
                    "w-6 h-6",
                    AssetColorClasses[asset.type],
                  )}
                />
              );
            }
            return (
              <div
                key={asset.id}
                className={classNames(
                  "flex flex-row items-center space-x-2",
                  asset.media.state === "Pending" && "text-mid-dark",
                  asset.media.state === "Processing" && "text-purple-4",
                  asset.media.state === "ProcessingFailed" &&
                    "text-danger-4 line-through",
                )}
              >
                <div>{icon}</div>
                <div>{asset.name}</div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button color="ghost" size="icon">
                        &times;
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Button
                        color="danger"
                        onClick={() =>
                          startTransition(async () => {
                            await removeAsset(asset.id);
                          })
                        }
                        disabled={isPending}
                        className="z-50"
                      >
                        {isPending && <Image src={Spinner} alt="" />}
                        You sure boss?
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            );
          })}
          <Button
            color="ghost"
            className="self-start"
            onClick={() => setUploadDialogOpen(true)}
          >
            <IoAddCircleSharp className="inline" />
            <div>Upload new asset</div>
          </Button>
        </div>
      </div>
      <Dialog
        open={isUploadDialogOpen}
        onOpenChange={(v) => {
          if (uploadRef.current && !v) {
            const progress = uploadRef.current.getProgress();
            if (progress > 0 && progress < 1) {
              if (confirm("Are you sure you want to cancel the upload?")) {
                uploadRef.current.cancel();
                setUploadDialogOpen(v);
              }
            } else {
              setUploadDialogOpen(v);
            }
          } else {
            setUploadDialogOpen(v);
          }
        }}
      >
        <DialogContent className="mx-auto max-w-sm rounded bg-light p-8 relative">
          <DialogHeader>
            <DialogTitle>
              Upload new {newUploadType === "$none" ? "asset" : newUploadType}
            </DialogTitle>
          </DialogHeader>
          <select
            onChange={(e) => setNewUploadType(e.target.value as AssetTypeType)}
            value={String(newUploadType)}
            className="border border-mid-dark rounded-md p-1 w-64"
          >
            <option value="$none" disabled>
              Select type
            </option>
            {AssetTypeSchema.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {newUploadType !== "$none" && (
            <MediaUploadDialog
              ref={uploadRef}
              title={"Upload new " + newUploadType}
              prompt="Drop file here, or click to select"
              accept={{}}
              disabled={isPending}
              onComplete={(url, name) => {
                startTransition(async () => {
                  await processAssetUpload(
                    props.rundown.id,
                    newUploadType,
                    name,
                    url,
                  );
                  setUploadDialogOpen(false);
                });
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
