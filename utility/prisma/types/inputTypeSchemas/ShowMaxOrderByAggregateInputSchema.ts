import type { Prisma } from "../../client";
import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ShowMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ShowMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      start: z.lazy(() => SortOrderSchema).optional(),
      version: z.lazy(() => SortOrderSchema).optional(),
      ytStreamID: z.lazy(() => SortOrderSchema).optional(),
      ytBroadcastID: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ShowMaxOrderByAggregateInputSchema;
