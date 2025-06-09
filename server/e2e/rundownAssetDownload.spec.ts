import { readFileSync } from "fs";
import * as path from "node:path";
import { test, expect, fileToDataTransfer } from "./lib";

test("download asset from rundown", async ({ showPage }) => {
  const testFileName = "download_test_file.txt";
  const testFileContent = readFileSync(
    path.join(__dirname, "testdata", testFileName),
  );

  // Navigate to the show page (handled by showPage fixture)

  // Create a new rundown
  await showPage.getByRole("button", { name: "New Rundown" }).click();
  await expect(showPage.getByTestId("name-rundown")).toBeVisible();
  await showPage.getByTestId("name-rundown").fill("Download Test Rundown");
  await showPage.getByTestId("create-rundown").click();
  await expect(showPage.getByLabel("Name")).toHaveValue(""); // Wait for form to clear
  await showPage.locator("body").press("Escape"); // Close the creation form

  // Navigate into the rundown
  await showPage.getByRole("link", { name: "Edit Rundown" }).click();
  await showPage.waitForURL(/.*\/shows\/.*\/rundown\/.*/);

  // Create a new asset category
  const categoryName = "Test Assets For Download";
  await showPage.getByRole("button", { name: "New Category" }).click();
  await showPage.getByPlaceholder("Stills").fill(categoryName);
  await showPage.getByRole("button", { name: "Create" }).click();
  // Click the category header to expand it
  const categoryHeaderButton = showPage.getByRole("button", {
    name: categoryName,
  });
  await categoryHeaderButton.click();

  // Get the main container for this category by going to the parent of the header button
  const categoryContainer = categoryHeaderButton.locator("xpath=..");

  // Find and click the "Upload new asset" button within this category container.
  const uploadNewAssetButton = categoryContainer.getByRole("button", {
    name: "Upload new asset",
  });
  await expect(uploadNewAssetButton).toBeVisible({ timeout: 10000 }); // Increased timeout, ensure panel is open
  await uploadNewAssetButton.click();
  await showPage.getByText("Upload file").click();

  const uploadPromise = showPage.waitForResponse(async (response) => {
    // tusd typically returns 201 or 204 on successful chunk/final upload
    return (
      response.url().startsWith("http://localhost:1080/files") &&
      (response.status() === 201 || response.status() === 204)
    );
  });

  await showPage
    .getByText("Drop files here, or click to select")
    .dispatchEvent("drop", {
      dataTransfer: await fileToDataTransfer(
        showPage,
        testFileContent,
        testFileName,
        "text/plain",
      ),
    });

  await uploadPromise; // TUS upload completes, dialog should close

  // The category gets collapsed when the upload completes
  await expect(
    showPage.getByRole("button", {
      expanded: false,
      name: `Expand ${categoryName}`,
    }),
  ).toBeVisible();

  // After upload, the category is collapsed. Locate its header and click to expand.
  const categoryHeader = showPage.getByTestId(
    "asset-category-header-" + categoryName,
  );
  await categoryHeader.waitFor({ state: "visible", timeout: 10000 });
  await categoryHeader.click();

  // Now that it's clicked, the content area should eventually become visible.
  const categoryContent = showPage.getByTestId(
    "asset-category-content-" + categoryName,
  );

  // Now, locate the asset item within this visible content area.
  // The expect(...).toBeVisible() on assetItemLocator will also wait for categoryContent to be visible.
  // The asset row itself doesn't have a data-testid, so we find it by its text content.
  const assetItemLocator = categoryContent
    .locator('div:has-text("' + testFileName + '")')
    .first();
  await expect(assetItemLocator).toBeVisible({ timeout: 30000 }); // Allow time for asset processing

  // Then, locate and check the download button within the visible asset item.
  const downloadButton = assetItemLocator.locator(
    '[data-testid^="RundownAssets.downloadButton."]',
  );
  await expect(downloadButton).toBeVisible({ timeout: 15000 }); // Allow time for button to appear (media state ready)

  // Start waiting for the download event BEFORE clicking the button
  const downloadPromise = showPage.waitForEvent("download");
  await downloadButton.click();
  const download = await downloadPromise;

  // Assert the downloaded file name
  expect(download.suggestedFilename()).toBe(`1 - ${testFileName}`);
});
