const { liveServerDetails, loginAndLazyLoadScroll } = require("./utilities");
const { test, expect } = require("@playwright/test");

test("home", async ({ page }) => {
  await page.goto(`/content/${liveServerDetails.aemSite}/en/home.html`);

  await loginAndLazyLoadScroll(page);

  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot("home.png");
});
