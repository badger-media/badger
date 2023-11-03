import type { Prisma } from "../../client";
import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { RundownUncheckedUpdateManyWithoutShowNestedInputSchema } from "./RundownUncheckedUpdateManyWithoutShowNestedInputSchema";
import { MetadataUncheckedUpdateManyWithoutShowNestedInputSchema } from "./MetadataUncheckedUpdateManyWithoutShowNestedInputSchema";

export const ShowUncheckedUpdateWithoutContinuityItemsInputSchema: z.ZodType<Prisma.ShowUncheckedUpdateWithoutContinuityItemsInput> =
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
      start: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      version: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      rundowns: z
        .lazy(() => RundownUncheckedUpdateManyWithoutShowNestedInputSchema)
        .optional(),
      metadata: z
        .lazy(() => MetadataUncheckedUpdateManyWithoutShowNestedInputSchema)
        .optional(),
    })
    .strict();

export default ShowUncheckedUpdateWithoutContinuityItemsInputSchema;
