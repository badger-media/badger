import { z } from 'zod';
import type { Prisma } from '../../client';
import { ConnectionUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConnectionUpdateManyMutationInputSchema'
import { ConnectionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConnectionUncheckedUpdateManyInputSchema'
import { ConnectionWhereInputSchema } from '../inputTypeSchemas/ConnectionWhereInputSchema'

export const ConnectionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ConnectionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ConnectionUpdateManyMutationInputSchema,ConnectionUncheckedUpdateManyInputSchema ]),
  where: ConnectionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ConnectionUpdateManyAndReturnArgsSchema;
