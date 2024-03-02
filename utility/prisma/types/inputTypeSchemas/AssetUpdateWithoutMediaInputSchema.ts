import type { Prisma } from "../../client";
import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { RundownUpdateOneRequiredWithoutAssetsNestedInputSchema } from "./RundownUpdateOneRequiredWithoutAssetsNestedInputSchema";
import { LoadAssetJobUpdateManyWithoutAssetNestedInputSchema } from "./LoadAssetJobUpdateManyWithoutAssetNestedInputSchema";

export const AssetUpdateWithoutMediaInputSchema: z.ZodType<Prisma.AssetUpdateWithoutMediaInput> =
  z
    .object({
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      category: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      order: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      rundown: z
        .lazy(() => RundownUpdateOneRequiredWithoutAssetsNestedInputSchema)
        .optional(),
      loadJobs: z
        .lazy(() => LoadAssetJobUpdateManyWithoutAssetNestedInputSchema)
        .optional(),
    })
    .strict();

export default AssetUpdateWithoutMediaInputSchema;
