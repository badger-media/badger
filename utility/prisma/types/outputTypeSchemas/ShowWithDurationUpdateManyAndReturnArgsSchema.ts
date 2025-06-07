import { z } from 'zod';
import type { Prisma } from '../../client';
import { ShowWithDurationUpdateManyMutationInputSchema } from '../inputTypeSchemas/ShowWithDurationUpdateManyMutationInputSchema'
import { ShowWithDurationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ShowWithDurationUncheckedUpdateManyInputSchema'
import { ShowWithDurationWhereInputSchema } from '../inputTypeSchemas/ShowWithDurationWhereInputSchema'

export const ShowWithDurationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ShowWithDurationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ShowWithDurationUpdateManyMutationInputSchema,ShowWithDurationUncheckedUpdateManyInputSchema ]),
  where: ShowWithDurationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ShowWithDurationUpdateManyAndReturnArgsSchema;
