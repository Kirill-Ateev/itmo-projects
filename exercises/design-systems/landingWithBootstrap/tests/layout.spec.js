const { test, expect } = require("@playwright/test");
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"
const BASE_URL = `${HOST}:${PORT}`

test("Logo::Layout should exist", async ({ page }) => {
    await page.goto(BASE_URL);
    const logo = page.locator(".header__logo");
    await expect(logo).toHaveText("NewsExplorer");
});

test("Subtitle::Layout should exist", async ({ page }) => {
    await page.goto(BASE_URL);
    const subTitle = page.locator(".top__subtitle");
    await expect(subTitle).toHaveText("Грета, у вас 5 сохранённых статей");
});

test("card::Layout min-height should be correct", async ({ page }) => {
    await page.goto(BASE_URL);
    const card = page.locator(".newsCard").first();
    await expect(card).toHaveCSS("min-height", "576px");
});
