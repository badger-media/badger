import type { Prisma } from "../../client";
import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ConnectionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ConnectionMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      target: z.lazy(() => SortOrderSchema).optional(),
      refreshToken: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ConnectionMaxOrderByAggregateInputSchema;
