import type { Prisma } from '../../client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ShowScalarRelationFilterSchema } from './ShowScalarRelationFilterSchema';
import { ShowWhereInputSchema } from './ShowWhereInputSchema';
import { RundownItemListRelationFilterSchema } from './RundownItemListRelationFilterSchema';
import { AssetListRelationFilterSchema } from './AssetListRelationFilterSchema';
import { MetadataListRelationFilterSchema } from './MetadataListRelationFilterSchema';

export const RundownWhereInputSchema: z.ZodType<Prisma.RundownWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RundownWhereInputSchema),z.lazy(() => RundownWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RundownWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RundownWhereInputSchema),z.lazy(() => RundownWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  showId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ytBroadcastID: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  show: z.union([ z.lazy(() => ShowScalarRelationFilterSchema),z.lazy(() => ShowWhereInputSchema) ]).optional(),
  items: z.lazy(() => RundownItemListRelationFilterSchema).optional(),
  assets: z.lazy(() => AssetListRelationFilterSchema).optional(),
  metadata: z.lazy(() => MetadataListRelationFilterSchema).optional()
}).strict();

export default RundownWhereInputSchema;
