import type { Prisma } from '../../client';

import { z } from 'zod';
import { MetadataValueTypeSchema } from './MetadataValueTypeSchema';
import { MetadataTargetTypeSchema } from './MetadataTargetTypeSchema';

export const MetadataFieldCreateManyInputSchema: z.ZodType<Prisma.MetadataFieldCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.lazy(() => MetadataValueTypeSchema),
  target: z.lazy(() => MetadataTargetTypeSchema),
  archived: z.boolean().optional(),
  default: z.boolean().optional()
}).strict();

export default MetadataFieldCreateManyInputSchema;
