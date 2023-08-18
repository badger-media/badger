import { z } from "zod";
import type {
  CompleteShowModel,
  PartialShowModel,
} from "@bowser/prisma/utilityTypes";

export interface ServerConnection {
  connected: true;
  server: string;
}

export type ServerConnectionStatus = ServerConnection | { connected: false };

export type PartialShowType = z.infer<typeof PartialShowModel>;
export type CompleteShowType = z.infer<typeof CompleteShowModel>;

export const Integration = z.enum(["vmix", "obs"]);
export type Integration = z.infer<typeof Integration>;
