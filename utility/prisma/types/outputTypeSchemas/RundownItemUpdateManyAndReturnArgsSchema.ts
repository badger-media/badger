import { z } from 'zod';
import type { Prisma } from '../../client';
import { RundownItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/RundownItemUpdateManyMutationInputSchema'
import { RundownItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RundownItemUncheckedUpdateManyInputSchema'
import { RundownItemWhereInputSchema } from '../inputTypeSchemas/RundownItemWhereInputSchema'

export const RundownItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RundownItemUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RundownItemUpdateManyMutationInputSchema,RundownItemUncheckedUpdateManyInputSchema ]),
  where: RundownItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RundownItemUpdateManyAndReturnArgsSchema;
