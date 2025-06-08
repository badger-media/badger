import type { Prisma } from '../../client';

import { z } from 'zod';
import { ShowWhereInputSchema } from './ShowWhereInputSchema';

export const ShowScalarRelationFilterSchema: z.ZodType<Prisma.ShowScalarRelationFilter> = z.object({
  is: z.lazy(() => ShowWhereInputSchema).optional(),
  isNot: z.lazy(() => ShowWhereInputSchema).optional()
}).strict();

export default ShowScalarRelationFilterSchema;
