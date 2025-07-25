import { z } from 'zod';
import type { Prisma } from '../../client';
import { ContinuityItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContinuityItemUpdateManyMutationInputSchema'
import { ContinuityItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContinuityItemUncheckedUpdateManyInputSchema'
import { ContinuityItemWhereInputSchema } from '../inputTypeSchemas/ContinuityItemWhereInputSchema'

export const ContinuityItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ContinuityItemUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ContinuityItemUpdateManyMutationInputSchema,ContinuityItemUncheckedUpdateManyInputSchema ]),
  where: ContinuityItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ContinuityItemUpdateManyAndReturnArgsSchema;
