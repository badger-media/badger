import type { Prisma } from "../../client";
import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { LoadAssetJobUncheckedUpdateManyWithoutAssetNestedInputSchema } from "./LoadAssetJobUncheckedUpdateManyWithoutAssetNestedInputSchema";

export const AssetUncheckedUpdateWithoutMediaInputSchema: z.ZodType<Prisma.AssetUncheckedUpdateWithoutMediaInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
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
      rundownId: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      loadJobs: z
        .lazy(
          () => LoadAssetJobUncheckedUpdateManyWithoutAssetNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default AssetUncheckedUpdateWithoutMediaInputSchema;
