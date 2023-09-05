import type { Prisma } from "../../client";
import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ContinuityItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContinuityItemAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      order: z.lazy(() => SortOrderSchema).optional(),
      showId: z.lazy(() => SortOrderSchema).optional(),
      durationSeconds: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ContinuityItemAvgOrderByAggregateInputSchema;
