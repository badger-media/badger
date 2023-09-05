import { z } from "zod";
import type { Prisma } from "../../client";
import { BaseJobCreateInputSchema } from "../inputTypeSchemas/BaseJobCreateInputSchema";
import { BaseJobUncheckedCreateInputSchema } from "../inputTypeSchemas/BaseJobUncheckedCreateInputSchema";

export const BaseJobCreateArgsSchema: z.ZodType<
  Omit<Prisma.BaseJobCreateArgs, "select" | "include">
> = z
  .object({
    data: z
      .union([BaseJobCreateInputSchema, BaseJobUncheckedCreateInputSchema])
      .optional(),
  })
  .strict();

export default BaseJobCreateArgsSchema;
