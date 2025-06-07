import { z } from 'zod';
import type { Prisma } from '../../client';
import { AssetUpdateManyMutationInputSchema } from '../inputTypeSchemas/AssetUpdateManyMutationInputSchema'
import { AssetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AssetUncheckedUpdateManyInputSchema'
import { AssetWhereInputSchema } from '../inputTypeSchemas/AssetWhereInputSchema'

export const AssetUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AssetUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AssetUpdateManyMutationInputSchema,AssetUncheckedUpdateManyInputSchema ]),
  where: AssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AssetUpdateManyAndReturnArgsSchema;
