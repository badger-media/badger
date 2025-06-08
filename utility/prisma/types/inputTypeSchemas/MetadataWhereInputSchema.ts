import type { Prisma } from '../../client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { MetadataFieldScalarRelationFilterSchema } from './MetadataFieldScalarRelationFilterSchema';
import { MetadataFieldWhereInputSchema } from './MetadataFieldWhereInputSchema';
import { ShowNullableScalarRelationFilterSchema } from './ShowNullableScalarRelationFilterSchema';
import { ShowWhereInputSchema } from './ShowWhereInputSchema';
import { RundownNullableScalarRelationFilterSchema } from './RundownNullableScalarRelationFilterSchema';
import { RundownWhereInputSchema } from './RundownWhereInputSchema';
import { MediaNullableScalarRelationFilterSchema } from './MediaNullableScalarRelationFilterSchema';
import { MediaWhereInputSchema } from './MediaWhereInputSchema';

export const MetadataWhereInputSchema: z.ZodType<Prisma.MetadataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MetadataWhereInputSchema),z.lazy(() => MetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MetadataWhereInputSchema),z.lazy(() => MetadataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.lazy(() => JsonFilterSchema).optional(),
  fieldId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  showId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  rundownId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  mediaId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  field: z.union([ z.lazy(() => MetadataFieldScalarRelationFilterSchema),z.lazy(() => MetadataFieldWhereInputSchema) ]).optional(),
  show: z.union([ z.lazy(() => ShowNullableScalarRelationFilterSchema),z.lazy(() => ShowWhereInputSchema) ]).optional().nullable(),
  rundown: z.union([ z.lazy(() => RundownNullableScalarRelationFilterSchema),z.lazy(() => RundownWhereInputSchema) ]).optional().nullable(),
  media: z.union([ z.lazy(() => MediaNullableScalarRelationFilterSchema),z.lazy(() => MediaWhereInputSchema) ]).optional().nullable(),
}).strict();

export default MetadataWhereInputSchema;
