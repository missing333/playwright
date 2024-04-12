import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://virtuegrow.com/");
});

test("test", async ({ page }) => {
  await page
    .locator("li")
    .filter({ hasText: "Humility" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Humility", exact: true })
  ).toHaveText("Humility");
  await page
    .locator("li")
    .filter({ hasText: "Generosity" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Generosity", exact: true })
  ).toHaveText("Generosity");
  await page
    .locator("li")
    .filter({ hasText: "Kindness" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Kindness", exact: true })
  ).toHaveText("Kindness");
  await page
    .locator("li")
    .filter({ hasText: "Chastity" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Chastity", exact: true })
  ).toHaveText("Chastity");
  await page
    .locator("li")
    .filter({ hasText: "Patience" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Patience", exact: true })
  ).toHaveText("Patience");
  await page
    .locator("li")
    .filter({ hasText: "Diligence" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Diligence", exact: true })
  ).toHaveText("Diligence");
  await page
    .locator("li")
    .filter({ hasText: "Moderation" })
    .getByRole("img")
    .click();
  await expect(
    page.getByRole("heading", { name: "Moderation", exact: true })
  ).toHaveText("Moderation");
});



test("pages", async ({ page }) => {
  await page.getByRole("link", { name: "Virtues" }).click();
  await expect(page.locator("#virtueNav .virtueLI")).toHaveCount(7);

  await page.getByRole("link", { name: "Grow" }).click();
  await expect(
    page.getByRole("heading", { name: "Grow in Virtue, Every day." })
  ).toHaveText("Grow in Virtue, Every day.");

  await page.getByRole("link", { name: "Reflect" }).click();
  await expect(page.locator("#quiz")).toBeVisible();
});
