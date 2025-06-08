import { z } from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserUpdateManyMutationInputSchema'
import { UserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserUncheckedUpdateManyInputSchema'
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema'

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UserUpdateManyAndReturnArgsSchema;
