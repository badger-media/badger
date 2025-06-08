import { z } from 'zod';
import type { Prisma } from '../../client';
import { MetadataFieldUpdateManyMutationInputSchema } from '../inputTypeSchemas/MetadataFieldUpdateManyMutationInputSchema'
import { MetadataFieldUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MetadataFieldUncheckedUpdateManyInputSchema'
import { MetadataFieldWhereInputSchema } from '../inputTypeSchemas/MetadataFieldWhereInputSchema'

export const MetadataFieldUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MetadataFieldUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MetadataFieldUpdateManyMutationInputSchema,MetadataFieldUncheckedUpdateManyInputSchema ]),
  where: MetadataFieldWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MetadataFieldUpdateManyAndReturnArgsSchema;
