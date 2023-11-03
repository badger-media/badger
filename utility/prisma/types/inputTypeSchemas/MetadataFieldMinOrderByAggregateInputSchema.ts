import type { Prisma } from "../../client";
import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const MetadataFieldMinOrderByAggregateInputSchema: z.ZodType<Prisma.MetadataFieldMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      target: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default MetadataFieldMinOrderByAggregateInputSchema;
