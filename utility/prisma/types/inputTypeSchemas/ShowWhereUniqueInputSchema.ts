import type { Prisma } from "../../client";
import { z } from "zod";
import { ShowWhereInputSchema } from "./ShowWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { IntFilterSchema } from "./IntFilterSchema";
import { RundownListRelationFilterSchema } from "./RundownListRelationFilterSchema";
import { ContinuityItemListRelationFilterSchema } from "./ContinuityItemListRelationFilterSchema";
import { MetadataListRelationFilterSchema } from "./MetadataListRelationFilterSchema";

export const ShowWhereUniqueInputSchema: z.ZodType<Prisma.ShowWhereUniqueInput> =
  z
    .object({
      id: z.number(),
    })
    .and(
      z
        .object({
          id: z.number().optional(),
          AND: z
            .union([
              z.lazy(() => ShowWhereInputSchema),
              z.lazy(() => ShowWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ShowWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ShowWhereInputSchema),
              z.lazy(() => ShowWhereInputSchema).array(),
            ])
            .optional(),
          name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          start: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          version: z
            .union([z.lazy(() => IntFilterSchema), z.number()])
            .optional(),
          rundowns: z.lazy(() => RundownListRelationFilterSchema).optional(),
          continuityItems: z
            .lazy(() => ContinuityItemListRelationFilterSchema)
            .optional(),
          metadata: z.lazy(() => MetadataListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export default ShowWhereUniqueInputSchema;
