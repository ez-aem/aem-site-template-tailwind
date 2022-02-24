const { username, password } = require("./utilities-login-info");

const loginAndLazyLoadScroll = async (page) => {
  // AEM-Cloud instances require this extra button press to login
  const loginDiv = await page.$$("button#coral-id-0");
  if (loginDiv.length) {
    await page.click("button#coral-id-0");
  }

  await page.fill("#username", username);
  await page.fill("#password", password);
  await page.click("#submit-button");
  await page.waitForLoadState();

  // this is needed because images are lazily loaded
  await page.evaluate(() => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  await page.waitForSelector(".cmp_image__image--is-loading", {
    state: "detached",
  });

  // waiting for browser sync notification to go away
  await page.waitForSelector("#__bs_notify__", { state: "detached" });
};

module.exports = {
  loginAndLazyLoadScroll,
};
