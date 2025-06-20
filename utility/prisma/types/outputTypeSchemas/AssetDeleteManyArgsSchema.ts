import { z } from 'zod';
import type { Prisma } from '../../client';
import { AssetWhereInputSchema } from '../inputTypeSchemas/AssetWhereInputSchema'

export const AssetDeleteManyArgsSchema: z.ZodType<Prisma.AssetDeleteManyArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AssetDeleteManyArgsSchema;
