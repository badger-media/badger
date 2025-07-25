import { z } from 'zod';
import type { Prisma } from '../../client';
import { MediaWhereInputSchema } from '../inputTypeSchemas/MediaWhereInputSchema'

export const MediaDeleteManyArgsSchema: z.ZodType<Prisma.MediaDeleteManyArgs> = z.object({
  where: MediaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MediaDeleteManyArgsSchema;
