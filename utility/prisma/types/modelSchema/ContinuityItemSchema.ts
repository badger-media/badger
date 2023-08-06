import { z } from 'zod';

/////////////////////////////////////////
// CONTINUITY ITEM SCHEMA
/////////////////////////////////////////

export const ContinuityItemSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  order: z.number().int(),
  showId: z.number().int(),
  durationSeconds: z.number().int(),
})

export type ContinuityItem = z.infer<typeof ContinuityItemSchema>

export default ContinuityItemSchema;