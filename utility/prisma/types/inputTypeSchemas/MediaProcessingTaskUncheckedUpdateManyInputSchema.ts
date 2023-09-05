import type { Prisma } from "../../client";
import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { MediaProcessingTaskStateSchema } from "./MediaProcessingTaskStateSchema";
import { EnumMediaProcessingTaskStateFieldUpdateOperationsInputSchema } from "./EnumMediaProcessingTaskStateFieldUpdateOperationsInputSchema";

export const MediaProcessingTaskUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MediaProcessingTaskUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      description: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      additionalInfo: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      state: z
        .union([
          z.lazy(() => MediaProcessingTaskStateSchema),
          z.lazy(
            () => EnumMediaProcessingTaskStateFieldUpdateOperationsInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export default MediaProcessingTaskUncheckedUpdateManyInputSchema;
