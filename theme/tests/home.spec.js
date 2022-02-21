const { test, expect } = require("@playwright/test");

test("home", async ({ page }) => {
  await page.goto(
    "http://localhost:7001/content/osnap-test/en/home.html?wcmmode=disabled"
  );

  await page.fill("#username", "admin");
  await page.fill("#password", "admin");
  await page.click("#submit-button");
  await page.waitForTimeout(1000);

  // this is needed because images are lazily loaded
  await page.evaluate(() =>
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  );
  await page.waitForTimeout(3000);

  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot("home.png");
});
