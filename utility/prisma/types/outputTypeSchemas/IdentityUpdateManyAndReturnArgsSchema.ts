import { z } from 'zod';
import type { Prisma } from '../../client';
import { IdentityUpdateManyMutationInputSchema } from '../inputTypeSchemas/IdentityUpdateManyMutationInputSchema'
import { IdentityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IdentityUncheckedUpdateManyInputSchema'
import { IdentityWhereInputSchema } from '../inputTypeSchemas/IdentityWhereInputSchema'

export const IdentityUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.IdentityUpdateManyAndReturnArgs> = z.object({
  data: z.union([ IdentityUpdateManyMutationInputSchema,IdentityUncheckedUpdateManyInputSchema ]),
  where: IdentityWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default IdentityUpdateManyAndReturnArgsSchema;
