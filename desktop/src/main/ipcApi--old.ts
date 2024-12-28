import {
  createAPIClient,
  serverAPI,
  serverApiClient,
} from "./base/serverApiClient";
import { z } from "zod";
import { callProcedure, TRPCError } from "@trpc/server";
import { selectedShow, setSelectedShow } from "./base/selectedShow";
import { CompleteShowModel } from "@badger/prisma/utilityTypes";
import { Integration } from "../common/types";
import {
  devToolsConfigSchema,
  getDevToolsConfig,
  saveDevToolsConfig,
} from "./base/settings";
import { IPCEvents } from "./ipcEventBus";
import { ipcMain } from "electron";
import logging, { logLevel, setLogLevel } from "./base/logging";
import { ShowSchema } from "@badger/prisma/types";
import { inspect } from "node:util";
import { ontimeRouter } from "./ontime/ipc";
import { vmixRouter } from "./vmix/ipc";
import { obsRouter } from "./obs/ipc";
import { mediaRouter } from "./media/ipc";
import { proc, r } from "./base/ipcRouter";
import {
  DEV_overrideSupportedIntegrations,
  supportedIntegrations,
} from "./base/integrations";

const logger = logging.getLogger("ipcApi");
const rendererLogger = logging.getLogger("renderer");

export const appRouter = r({
  log: proc
    .input(
      z.object({
        level: z.enum(["trace", "debug", "info", "warn", "error"]),
        logger: z.string().optional(),
        message: z.string(),
      }),
    )
    .mutation(({ input }) => {
      rendererLogger[input.level](input.message);
    }),
  supportedIntegrations: proc.output(z.array(Integration)).query(() => {
    return supportedIntegrations;
  }),
  getLogLevel: proc
    .output(z.enum(["trace", "debug", "info", "warn", "error"]))
    .query(() => {
      return logLevel;
    }),
  setLogLevel: proc
    .input(z.enum(["trace", "debug", "info", "warn", "error"]))
    .mutation(async ({ input }) => {
      setLogLevel(input);
    }),
  media: mediaRouter,
  obs: obsRouter,
  vmix: vmixRouter,
  ontime: ontimeRouter,
});
export type AppRouter = typeof appRouter;

if (process.env.E2E_TEST === "true") {
  ipcMain.on("doIPCMutation", async (_, proc: string, input: unknown) => {
    logger.debug(
      "doIPCMutation: " + JSON.stringify(proc) + " " + JSON.stringify(input),
    );
    await callProcedure({
      procedures: appRouter._def.procedures,
      path: proc,
      rawInput: input,
      ctx: {},
      type: "mutation",
    });
  });
}
