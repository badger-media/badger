import { describe } from "vitest";

export const integrate =
  process.env.TEST_INTEGRATION === "true" ? describe : describe.skip;
