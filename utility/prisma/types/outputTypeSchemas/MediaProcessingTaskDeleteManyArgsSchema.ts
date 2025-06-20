import { z } from 'zod';
import type { Prisma } from '../../client';
import { MediaProcessingTaskWhereInputSchema } from '../inputTypeSchemas/MediaProcessingTaskWhereInputSchema'

export const MediaProcessingTaskDeleteManyArgsSchema: z.ZodType<Prisma.MediaProcessingTaskDeleteManyArgs> = z.object({
  where: MediaProcessingTaskWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MediaProcessingTaskDeleteManyArgsSchema;
