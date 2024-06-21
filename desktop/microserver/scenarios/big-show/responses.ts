import { CompleteShowModel } from "@badger/prisma/utilityTypes";
import { proc } from "../../lib";
import { z } from "zod";
import { ShowSchema } from "@badger/prisma/types";
import { cloneDeep } from "lodash";

import { sampleShow as origSampleShow } from "../default/responses";

const sampleShow = cloneDeep(origSampleShow);
const N_RUNDOWN_ITEMS = 50;
const base = cloneDeep(sampleShow.rundowns[0].items[0]);
for (let i = 2; i <= N_RUNDOWN_ITEMS; i++) {
  const item = cloneDeep(base);
  item.id = i;
  item.order = i;
  item.name = `Test Item ${i}`;
  sampleShow.rundowns[0].items.push(item);
}

const responses = {
  "shows.listUpcoming": proc
    .input(
      z
        .object({
          gracePeriodHours: z.number().default(0),
        })
        .optional(),
    )
    .output(z.array(ShowSchema))
    .query(async () => {
      return [sampleShow];
    }),
  "shows.get": proc
    .input(z.object({ id: z.number() }))
    .output(CompleteShowModel)
    .query(async ({ input }) => {
      if (input.id !== sampleShow.id) {
        throw new Error("Not found");
      }
      return sampleShow;
    }),
  "shows.getVersion": proc
    .input(z.object({ id: z.number() }))
    .output(z.object({ version: z.number() }))
    .query(async ({ input }) => {
      if (input.id !== sampleShow.id) {
        throw new Error("Not found");
      }
      return { version: sampleShow.version };
    }),
  "rundowns.get": proc
    .input(z.object({ id: z.number() }))
    .output(z.array(z.object({ id: z.number() })))
    .query(async ({ input }) => {
      if (input.id !== sampleShow.rundowns[0].id) {
        throw new Error("Not found");
      }
      return sampleShow.rundowns[0].items;
    }),
};

export default responses;
