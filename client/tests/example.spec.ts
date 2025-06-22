import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dine OS/);
});

test("order link", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");

  // Click the order link.
  await page.getByRole("link", { name: "Orders" }).click();

  await expect(page).toHaveTitle(/Dine OS/);
});
