import type { Prisma } from '../../client';

import { z } from 'zod';
import { MediaStateSchema } from './MediaStateSchema';
import { RundownItemUncheckedCreateNestedManyWithoutMediaInputSchema } from './RundownItemUncheckedCreateNestedManyWithoutMediaInputSchema';
import { MediaProcessingTaskUncheckedCreateNestedManyWithoutMediaInputSchema } from './MediaProcessingTaskUncheckedCreateNestedManyWithoutMediaInputSchema';
import { AssetUncheckedCreateNestedManyWithoutMediaInputSchema } from './AssetUncheckedCreateNestedManyWithoutMediaInputSchema';
import { MetadataUncheckedCreateNestedManyWithoutMediaInputSchema } from './MetadataUncheckedCreateNestedManyWithoutMediaInputSchema';

export const MediaUncheckedCreateWithoutContinuityItemsInputSchema: z.ZodType<Prisma.MediaUncheckedCreateWithoutContinuityItemsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  rawPath: z.string(),
  path: z.string().optional().nullable(),
  durationSeconds: z.number().int(),
  state: z.lazy(() => MediaStateSchema).optional(),
  rundownItems: z.lazy(() => RundownItemUncheckedCreateNestedManyWithoutMediaInputSchema).optional(),
  tasks: z.lazy(() => MediaProcessingTaskUncheckedCreateNestedManyWithoutMediaInputSchema).optional(),
  assets: z.lazy(() => AssetUncheckedCreateNestedManyWithoutMediaInputSchema).optional(),
  metadata: z.lazy(() => MetadataUncheckedCreateNestedManyWithoutMediaInputSchema).optional()
}).strict();

export default MediaUncheckedCreateWithoutContinuityItemsInputSchema;
