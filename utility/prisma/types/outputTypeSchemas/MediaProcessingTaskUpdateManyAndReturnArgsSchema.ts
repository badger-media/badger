import { z } from 'zod';
import type { Prisma } from '../../client';
import { MediaProcessingTaskUpdateManyMutationInputSchema } from '../inputTypeSchemas/MediaProcessingTaskUpdateManyMutationInputSchema'
import { MediaProcessingTaskUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MediaProcessingTaskUncheckedUpdateManyInputSchema'
import { MediaProcessingTaskWhereInputSchema } from '../inputTypeSchemas/MediaProcessingTaskWhereInputSchema'

export const MediaProcessingTaskUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MediaProcessingTaskUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MediaProcessingTaskUpdateManyMutationInputSchema,MediaProcessingTaskUncheckedUpdateManyInputSchema ]),
  where: MediaProcessingTaskWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MediaProcessingTaskUpdateManyAndReturnArgsSchema;
