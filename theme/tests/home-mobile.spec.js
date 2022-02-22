const { loginAndLazyLoadScroll } = require("./utilities");
const { test, expect } = require("@playwright/test");
const { aemSite } = require("../playwright.config");

test("home-mobile", async ({ page }) => {
  await page.goto(`/content/${aemSite}/en/home.html`);

  await loginAndLazyLoadScroll(page);

  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot("home-mobile.png");

  await page.click("#mobile-header-button");

  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot("home-mobile-menu.png");
});
