import type { Prisma } from "../../client";
import { z } from "zod";
import { SettingKeySchema } from "./SettingKeySchema";
import { EnumSettingKeyFieldUpdateOperationsInputSchema } from "./EnumSettingKeyFieldUpdateOperationsInputSchema";
import { JsonNullValueInputSchema } from "./JsonNullValueInputSchema";
import { InputJsonValue } from "./InputJsonValue";

export const SettingUpdateManyMutationInputSchema: z.ZodType<Prisma.SettingUpdateManyMutationInput> =
  z
    .object({
      key: z
        .union([
          z.lazy(() => SettingKeySchema),
          z.lazy(() => EnumSettingKeyFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      value: z
        .union([z.lazy(() => JsonNullValueInputSchema), InputJsonValue])
        .optional(),
    })
    .strict();

export default SettingUpdateManyMutationInputSchema;
