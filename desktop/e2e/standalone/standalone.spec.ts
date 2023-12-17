import {
  test as base,
  _electron as electron,
  expect,
  type ElectronApplication,
  type Page,
} from "@playwright/test";
import type { CalledWithMock } from "jest-mock-extended";

export const test = base.extend<{
  app: [ElectronApplication, Page];
}>({
  // eslint-disable-next-line no-empty-pattern
  app: async ({}, use, testInfo) => {
    const app = await electron.launch({
      args: ["--enable-logging", ".vite/build/main.js"],
      env: {
        ...process.env,
        NODE_ENV: "test",
        E2E_TEST: "true",
        __USE_MOCK_SERVER_API: "true",
      },
    });

    const win = await app.firstWindow();

    await win.context().tracing.start({ screenshots: true, snapshots: true });

    await win.waitForLoadState("domcontentloaded");

    await win.getByLabel("Server address").fill("http://localhost:3000");
    await win.getByLabel("Server Password").fill("aaa");

    await win.getByRole("button", { name: "Connect" }).click();

    await use([app, win]);

    await win
      .context()
      .tracing.stop({ path: `traces/${testInfo.title}-${testInfo.retry}.zip` });

    await expect(
      app.evaluate(({ ipcMain }) => ipcMain.emit("resetTestSettings")),
    ).not.toBe(false);

    await win.close();
    await app.close();
  },
});

test.beforeEach(async ({ app: [app] }) => {
  await app.evaluate(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).__MOCK_SERVER_API__.mock("query", "ping", "pong");
  });
});

test.afterEach(async ({ app: [app] }) => {
  await app.evaluate(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).__MOCK_SERVER_API__.reset();
  });
});

test("it works", async ({ app: [app, page] }) => {
  await expect(
    page.getByRole("heading", { name: "Select a show" }),
  ).toBeVisible();
});
