import type { Prisma } from '../../client';

import { z } from 'zod';
import { MediaWhereInputSchema } from './MediaWhereInputSchema';

export const MediaScalarRelationFilterSchema: z.ZodType<Prisma.MediaScalarRelationFilter> = z.object({
  is: z.lazy(() => MediaWhereInputSchema).optional(),
  isNot: z.lazy(() => MediaWhereInputSchema).optional()
}).strict();

export default MediaScalarRelationFilterSchema;
