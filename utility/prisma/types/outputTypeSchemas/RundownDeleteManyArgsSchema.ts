import { z } from 'zod';
import type { Prisma } from '../../client';
import { RundownWhereInputSchema } from '../inputTypeSchemas/RundownWhereInputSchema'

export const RundownDeleteManyArgsSchema: z.ZodType<Prisma.RundownDeleteManyArgs> = z.object({
  where: RundownWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RundownDeleteManyArgsSchema;
