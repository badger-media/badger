import type { Prisma } from '../../client';

import { z } from 'zod';

export const ContinuityItemCreateManyMediaInputSchema: z.ZodType<Prisma.ContinuityItemCreateManyMediaInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  order: z.number().int(),
  showId: z.number().int(),
  durationSeconds: z.number().int(),
  ytBroadcastID: z.string().optional().nullable()
}).strict();

export default ContinuityItemCreateManyMediaInputSchema;
