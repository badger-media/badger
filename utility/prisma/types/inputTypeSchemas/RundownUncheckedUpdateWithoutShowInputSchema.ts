import type { Prisma } from "../../client";
import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { RundownItemUncheckedUpdateManyWithoutRundownNestedInputSchema } from "./RundownItemUncheckedUpdateManyWithoutRundownNestedInputSchema";
import { AssetUncheckedUpdateManyWithoutRundownNestedInputSchema } from "./AssetUncheckedUpdateManyWithoutRundownNestedInputSchema";
import { MetadataUncheckedUpdateManyWithoutRundownNestedInputSchema } from "./MetadataUncheckedUpdateManyWithoutRundownNestedInputSchema";

export const RundownUncheckedUpdateWithoutShowInputSchema: z.ZodType<Prisma.RundownUncheckedUpdateWithoutShowInput> =
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
      order: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      items: z
        .lazy(
          () => RundownItemUncheckedUpdateManyWithoutRundownNestedInputSchema,
        )
        .optional(),
      assets: z
        .lazy(() => AssetUncheckedUpdateManyWithoutRundownNestedInputSchema)
        .optional(),
      metadata: z
        .lazy(() => MetadataUncheckedUpdateManyWithoutRundownNestedInputSchema)
        .optional(),
    })
    .strict();

export default RundownUncheckedUpdateWithoutShowInputSchema;
