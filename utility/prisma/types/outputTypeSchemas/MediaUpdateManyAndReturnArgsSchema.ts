import { z } from 'zod';
import type { Prisma } from '../../client';
import { MediaUpdateManyMutationInputSchema } from '../inputTypeSchemas/MediaUpdateManyMutationInputSchema'
import { MediaUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MediaUncheckedUpdateManyInputSchema'
import { MediaWhereInputSchema } from '../inputTypeSchemas/MediaWhereInputSchema'

export const MediaUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MediaUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MediaUpdateManyMutationInputSchema,MediaUncheckedUpdateManyInputSchema ]),
  where: MediaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MediaUpdateManyAndReturnArgsSchema;
