import type { Prisma } from "../../client";
import { z } from "zod";
import { JobTypeSchema } from "./JobTypeSchema";
import { NestedEnumJobTypeWithAggregatesFilterSchema } from "./NestedEnumJobTypeWithAggregatesFilterSchema";
import { NestedIntFilterSchema } from "./NestedIntFilterSchema";
import { NestedEnumJobTypeFilterSchema } from "./NestedEnumJobTypeFilterSchema";

export const EnumJobTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumJobTypeWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => JobTypeSchema).optional(),
      in: z
        .lazy(() => JobTypeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => JobTypeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => JobTypeSchema),
          z.lazy(() => NestedEnumJobTypeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumJobTypeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumJobTypeFilterSchema).optional(),
    })
    .strict();

export default EnumJobTypeWithAggregatesFilterSchema;
