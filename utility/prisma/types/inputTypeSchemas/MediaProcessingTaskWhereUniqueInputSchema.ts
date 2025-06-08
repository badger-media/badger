import type { Prisma } from '../../client';

import { z } from 'zod';
import { MediaProcessingTaskMedia_idDescriptionCompoundUniqueInputSchema } from './MediaProcessingTaskMedia_idDescriptionCompoundUniqueInputSchema';
import { MediaProcessingTaskWhereInputSchema } from './MediaProcessingTaskWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumMediaProcessingTaskStateFilterSchema } from './EnumMediaProcessingTaskStateFilterSchema';
import { MediaProcessingTaskStateSchema } from './MediaProcessingTaskStateSchema';
import { MediaScalarRelationFilterSchema } from './MediaScalarRelationFilterSchema';
import { MediaWhereInputSchema } from './MediaWhereInputSchema';

export const MediaProcessingTaskWhereUniqueInputSchema: z.ZodType<Prisma.MediaProcessingTaskWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    media_id_description: z.lazy(() => MediaProcessingTaskMedia_idDescriptionCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    media_id_description: z.lazy(() => MediaProcessingTaskMedia_idDescriptionCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  media_id_description: z.lazy(() => MediaProcessingTaskMedia_idDescriptionCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => MediaProcessingTaskWhereInputSchema),z.lazy(() => MediaProcessingTaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MediaProcessingTaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MediaProcessingTaskWhereInputSchema),z.lazy(() => MediaProcessingTaskWhereInputSchema).array() ]).optional(),
  media_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  additionalInfo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => EnumMediaProcessingTaskStateFilterSchema),z.lazy(() => MediaProcessingTaskStateSchema) ]).optional(),
  media: z.union([ z.lazy(() => MediaScalarRelationFilterSchema),z.lazy(() => MediaWhereInputSchema) ]).optional(),
}).strict());

export default MediaProcessingTaskWhereUniqueInputSchema;
