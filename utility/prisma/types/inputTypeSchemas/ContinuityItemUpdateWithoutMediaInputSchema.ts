import type { Prisma } from "../../client";
import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { ShowUpdateOneRequiredWithoutContinuityItemsNestedInputSchema } from "./ShowUpdateOneRequiredWithoutContinuityItemsNestedInputSchema";

export const ContinuityItemUpdateWithoutMediaInputSchema: z.ZodType<Prisma.ContinuityItemUpdateWithoutMediaInput> =
  z
    .object({
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
      durationSeconds: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      show: z
        .lazy(
          () => ShowUpdateOneRequiredWithoutContinuityItemsNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default ContinuityItemUpdateWithoutMediaInputSchema;
