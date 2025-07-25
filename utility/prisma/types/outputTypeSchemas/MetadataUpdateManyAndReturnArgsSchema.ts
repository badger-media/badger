import { z } from 'zod';
import type { Prisma } from '../../client';
import { MetadataUpdateManyMutationInputSchema } from '../inputTypeSchemas/MetadataUpdateManyMutationInputSchema'
import { MetadataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MetadataUncheckedUpdateManyInputSchema'
import { MetadataWhereInputSchema } from '../inputTypeSchemas/MetadataWhereInputSchema'

export const MetadataUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MetadataUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MetadataUpdateManyMutationInputSchema,MetadataUncheckedUpdateManyInputSchema ]),
  where: MetadataWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MetadataUpdateManyAndReturnArgsSchema;
