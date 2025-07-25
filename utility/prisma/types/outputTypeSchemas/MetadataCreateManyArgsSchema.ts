import { z } from 'zod';
import type { Prisma } from '../../client';
import { MetadataCreateManyInputSchema } from '../inputTypeSchemas/MetadataCreateManyInputSchema'

export const MetadataCreateManyArgsSchema: z.ZodType<Prisma.MetadataCreateManyArgs> = z.object({
  data: z.union([ MetadataCreateManyInputSchema,MetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MetadataCreateManyArgsSchema;
