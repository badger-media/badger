import { z } from 'zod';
import type { Prisma } from '../../client';
import { RundownUpdateManyMutationInputSchema } from '../inputTypeSchemas/RundownUpdateManyMutationInputSchema'
import { RundownUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RundownUncheckedUpdateManyInputSchema'
import { RundownWhereInputSchema } from '../inputTypeSchemas/RundownWhereInputSchema'

export const RundownUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RundownUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RundownUpdateManyMutationInputSchema,RundownUncheckedUpdateManyInputSchema ]),
  where: RundownWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RundownUpdateManyAndReturnArgsSchema;
