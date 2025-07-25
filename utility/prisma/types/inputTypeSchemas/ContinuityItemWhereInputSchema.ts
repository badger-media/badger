import type { Prisma } from '../../client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { MediaNullableScalarRelationFilterSchema } from './MediaNullableScalarRelationFilterSchema';
import { MediaWhereInputSchema } from './MediaWhereInputSchema';
import { ShowScalarRelationFilterSchema } from './ShowScalarRelationFilterSchema';
import { ShowWhereInputSchema } from './ShowWhereInputSchema';

export const ContinuityItemWhereInputSchema: z.ZodType<Prisma.ContinuityItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContinuityItemWhereInputSchema),z.lazy(() => ContinuityItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContinuityItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContinuityItemWhereInputSchema),z.lazy(() => ContinuityItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  showId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  durationSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ytBroadcastID: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mediaId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  media: z.union([ z.lazy(() => MediaNullableScalarRelationFilterSchema),z.lazy(() => MediaWhereInputSchema) ]).optional().nullable(),
  show: z.union([ z.lazy(() => ShowScalarRelationFilterSchema),z.lazy(() => ShowWhereInputSchema) ]).optional(),
}).strict();

export default ContinuityItemWhereInputSchema;
