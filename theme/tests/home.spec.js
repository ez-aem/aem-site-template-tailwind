const { loginAndLazyLoadScroll } = require("./utilities");
const { test, expect } = require("@playwright/test");
const { aemSite } = require("../live.playwright.config");

test("home", async ({ page }) => {
  await page.goto(`/content/${aemSite}/en/home.html`);

  await loginAndLazyLoadScroll(page);

  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot("home.png");
});
