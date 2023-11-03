import { z } from "zod";
import type { Prisma } from "../../client";
import { MetadataFieldArgsSchema } from "../outputTypeSchemas/MetadataFieldArgsSchema";
import { ShowArgsSchema } from "../outputTypeSchemas/ShowArgsSchema";
import { RundownArgsSchema } from "../outputTypeSchemas/RundownArgsSchema";

export const MetadataSelectSchema: z.ZodType<Prisma.MetadataSelect> = z
  .object({
    id: z.boolean().optional(),
    value: z.boolean().optional(),
    fieldId: z.boolean().optional(),
    showId: z.boolean().optional(),
    rundownId: z.boolean().optional(),
    field: z
      .union([z.boolean(), z.lazy(() => MetadataFieldArgsSchema)])
      .optional(),
    show: z.union([z.boolean(), z.lazy(() => ShowArgsSchema)]).optional(),
    rundown: z.union([z.boolean(), z.lazy(() => RundownArgsSchema)]).optional(),
  })
  .strict();

export default MetadataSelectSchema;
