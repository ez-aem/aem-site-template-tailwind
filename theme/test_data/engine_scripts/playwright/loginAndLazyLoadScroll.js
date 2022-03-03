module.exports = async (page, scenario) => {
  const { aemUsername, aemPassword } = scenario.login;
  // AEM-Cloud instances require this extra button press to login
  const loginDiv = await page.$$("button#coral-id-0");
  if (loginDiv.length) {
    await page.click("button#coral-id-0");
  }

  await page.fill("#username", aemUsername);
  await page.fill("#password", aemPassword);
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
  await page.waitForSelector(".cmp-image__image--is-loading", {
    state: "detached",
  });

  // waiting for browser sync notification to go away
  await page.waitForSelector("#__bs_notify__", { state: "detached" });
};
