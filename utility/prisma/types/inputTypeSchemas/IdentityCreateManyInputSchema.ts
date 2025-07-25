import type { Prisma } from '../../client';

import { z } from 'zod';

export const IdentityCreateManyInputSchema: z.ZodType<Prisma.IdentityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  provider: z.string(),
  identityID: z.string(),
  userID: z.number().int()
}).strict();

export default IdentityCreateManyInputSchema;
