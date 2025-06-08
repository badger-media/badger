import { InputJsonValue } from "./client/runtime/library";

interface MediaMetaValue {
  fileName: string;
  fileType: "image";
}

export type MetadataValue = string | MediaMetaValue;

declare global {
  namespace PrismaJson {
    // This type is more permissive, otherwise the generated Zod types don't match it
    type MetadataValue = string | MediaMetaValue | InputJsonValue;

    type JobPayload =
      | {} // DummyTestJob
      | {
          sourceType: string;
          source: string;
          assetId: number;
        } // LoadAssetJob
      | {
          sourceType: string;
          source: string;
          mediaId: number;
        }; // ProcessMediaJob
  }
}

export {};
