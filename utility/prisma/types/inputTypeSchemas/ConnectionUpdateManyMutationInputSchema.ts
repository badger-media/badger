import type { Prisma } from "../../client";
import { z } from "zod";
import { ConnectionTargetSchema } from "./ConnectionTargetSchema";
import { EnumConnectionTargetFieldUpdateOperationsInputSchema } from "./EnumConnectionTargetFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const ConnectionUpdateManyMutationInputSchema: z.ZodType<Prisma.ConnectionUpdateManyMutationInput> =
  z
    .object({
      target: z
        .union([
          z.lazy(() => ConnectionTargetSchema),
          z.lazy(() => EnumConnectionTargetFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default ConnectionUpdateManyMutationInputSchema;
