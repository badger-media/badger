import { z } from 'zod';
import type { Prisma } from '../../client';
import { IdentityWhereInputSchema } from '../inputTypeSchemas/IdentityWhereInputSchema'

export const IdentityDeleteManyArgsSchema: z.ZodType<Prisma.IdentityDeleteManyArgs> = z.object({
  where: IdentityWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default IdentityDeleteManyArgsSchema;
