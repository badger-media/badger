import type { Prisma } from "../../client";
import { z } from "zod";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema";
import { JobStateSchema } from "./JobStateSchema";
import { EnumJobStateFieldUpdateOperationsInputSchema } from "./EnumJobStateFieldUpdateOperationsInputSchema";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { NullableDateTimeFieldUpdateOperationsInputSchema } from "./NullableDateTimeFieldUpdateOperationsInputSchema";
import { ProcessMediaJobUncheckedUpdateOneWithoutBase_jobNestedInputSchema } from "./ProcessMediaJobUncheckedUpdateOneWithoutBase_jobNestedInputSchema";
import { DummyTestJobUncheckedUpdateOneWithoutBase_jobNestedInputSchema } from "./DummyTestJobUncheckedUpdateOneWithoutBase_jobNestedInputSchema";

export const BaseJobUncheckedUpdateWithoutLoadAssetJobInputSchema: z.ZodType<Prisma.BaseJobUncheckedUpdateWithoutLoadAssetJobInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      workerId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      state: z
        .union([
          z.lazy(() => JobStateSchema),
          z.lazy(() => EnumJobStateFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      startedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      completedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      externalJobProvider: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      externalJobID: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ProcessMediaJob: z
        .lazy(
          () =>
            ProcessMediaJobUncheckedUpdateOneWithoutBase_jobNestedInputSchema,
        )
        .optional(),
      DummyTestJob: z
        .lazy(
          () => DummyTestJobUncheckedUpdateOneWithoutBase_jobNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default BaseJobUncheckedUpdateWithoutLoadAssetJobInputSchema;
