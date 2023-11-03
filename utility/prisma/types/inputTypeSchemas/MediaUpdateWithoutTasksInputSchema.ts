import type { Prisma } from "../../client";
import { z } from "zod";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { MediaStateSchema } from "./MediaStateSchema";
import { EnumMediaStateFieldUpdateOperationsInputSchema } from "./EnumMediaStateFieldUpdateOperationsInputSchema";
import { RundownItemUpdateManyWithoutMediaNestedInputSchema } from "./RundownItemUpdateManyWithoutMediaNestedInputSchema";
import { ContinuityItemUpdateManyWithoutMediaNestedInputSchema } from "./ContinuityItemUpdateManyWithoutMediaNestedInputSchema";
import { ProcessMediaJobUpdateManyWithoutMediaNestedInputSchema } from "./ProcessMediaJobUpdateManyWithoutMediaNestedInputSchema";
import { AssetUpdateManyWithoutMediaNestedInputSchema } from "./AssetUpdateManyWithoutMediaNestedInputSchema";

export const MediaUpdateWithoutTasksInputSchema: z.ZodType<Prisma.MediaUpdateWithoutTasksInput> =
  z
    .object({
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      rawPath: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      path: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      durationSeconds: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      state: z
        .union([
          z.lazy(() => MediaStateSchema),
          z.lazy(() => EnumMediaStateFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      rundownItems: z
        .lazy(() => RundownItemUpdateManyWithoutMediaNestedInputSchema)
        .optional(),
      continuityItems: z
        .lazy(() => ContinuityItemUpdateManyWithoutMediaNestedInputSchema)
        .optional(),
      process_jobs: z
        .lazy(() => ProcessMediaJobUpdateManyWithoutMediaNestedInputSchema)
        .optional(),
      assets: z
        .lazy(() => AssetUpdateManyWithoutMediaNestedInputSchema)
        .optional(),
    })
    .strict();

export default MediaUpdateWithoutTasksInputSchema;
