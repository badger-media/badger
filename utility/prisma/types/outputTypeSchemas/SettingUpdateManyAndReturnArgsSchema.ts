import { z } from 'zod';
import type { Prisma } from '../../client';
import { SettingUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingUpdateManyMutationInputSchema'
import { SettingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingUncheckedUpdateManyInputSchema'
import { SettingWhereInputSchema } from '../inputTypeSchemas/SettingWhereInputSchema'

export const SettingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SettingUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SettingUpdateManyMutationInputSchema,SettingUncheckedUpdateManyInputSchema ]),
  where: SettingWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SettingUpdateManyAndReturnArgsSchema;
