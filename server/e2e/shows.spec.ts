import { test, expect } from "@playwright/test";

test.beforeAll(async ({ request }) => {
  await request.post("/api/resetDBInTestsDoNotUseOrYouWillBeFired");
});

test("loads", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Shows" })).toBeVisible();
});

test("create show", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "New Show" }).click();
  await page.getByLabel("Name").fill("Test Show");
  await page.getByLabel("Start").click();
  // see comment in showItems.spec.ts for an explanation
  await page
    .getByRole("button")
    .filter({ hasNot: page.locator(".opacity-50"), hasText: "27" })
    .click();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Create" }).click();
  await expect(page.getByRole("heading", { name: "Test Show" })).toBeVisible();
});
