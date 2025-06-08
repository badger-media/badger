import type { Prisma } from '../../client';

import { z } from 'zod';
import { MetadataFieldWhereInputSchema } from './MetadataFieldWhereInputSchema';

export const MetadataFieldScalarRelationFilterSchema: z.ZodType<Prisma.MetadataFieldScalarRelationFilter> = z.object({
  is: z.lazy(() => MetadataFieldWhereInputSchema).optional(),
  isNot: z.lazy(() => MetadataFieldWhereInputSchema).optional()
}).strict();

export default MetadataFieldScalarRelationFilterSchema;
