import type { Prisma } from '../../client';

import { z } from 'zod';
import { RundownItemWhereInputSchema } from './RundownItemWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumRundownItemTypeFilterSchema } from './EnumRundownItemTypeFilterSchema';
import { RundownItemTypeSchema } from './RundownItemTypeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { MediaNullableScalarRelationFilterSchema } from './MediaNullableScalarRelationFilterSchema';
import { MediaWhereInputSchema } from './MediaWhereInputSchema';
import { RundownScalarRelationFilterSchema } from './RundownScalarRelationFilterSchema';
import { RundownWhereInputSchema } from './RundownWhereInputSchema';

export const RundownItemWhereUniqueInputSchema: z.ZodType<Prisma.RundownItemWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RundownItemWhereInputSchema),z.lazy(() => RundownItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RundownItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RundownItemWhereInputSchema),z.lazy(() => RundownItemWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rundownId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  durationSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  type: z.union([ z.lazy(() => EnumRundownItemTypeFilterSchema),z.lazy(() => RundownItemTypeSchema) ]).optional(),
  notes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mediaId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  media: z.union([ z.lazy(() => MediaNullableScalarRelationFilterSchema),z.lazy(() => MediaWhereInputSchema) ]).optional().nullable(),
  rundown: z.union([ z.lazy(() => RundownScalarRelationFilterSchema),z.lazy(() => RundownWhereInputSchema) ]).optional(),
}).strict());

export default RundownItemWhereUniqueInputSchema;
