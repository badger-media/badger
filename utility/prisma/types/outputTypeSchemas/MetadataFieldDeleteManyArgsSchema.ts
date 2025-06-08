import { z } from 'zod';
import type { Prisma } from '../../client';
import { MetadataFieldWhereInputSchema } from '../inputTypeSchemas/MetadataFieldWhereInputSchema'

export const MetadataFieldDeleteManyArgsSchema: z.ZodType<Prisma.MetadataFieldDeleteManyArgs> = z.object({
  where: MetadataFieldWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MetadataFieldDeleteManyArgsSchema;
