import { test, expect } from "./base";

test("it works", async ({ page }) => {
  await page.getByText("Test show").click();
});

test.describe("big show", () => {
  test.use({ scenario: "big-show" });
  // TODO[BADGER-180]: Need new vmix mocks in place
  test.fixme(
    "scrolling for a show with lots of rundown items",
    async ({ page }) => {
      await page.getByRole("button", { name: "Select" }).click();

      await page.getByText("Continuity").click();
      await page.getByRole("menuitem", { name: "Test Rundown" }).click();

      await page
        .getByRole("cell", { name: "Test Item 40" })
        .scrollIntoViewIfNeeded();
      await expect(
        page.getByRole("cell", { name: "Test Item 40" }),
      ).toBeInViewport();
    },
  );
});
