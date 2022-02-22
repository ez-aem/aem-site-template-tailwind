const loginAndLazyLoadScroll = async (page) => {
  await page.fill("#username", "admin");
  await page.fill("#password", "admin");
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
  await page.waitForLoadState();

  // waiting for browser sync notification to go away
  await page.waitForTimeout(3000);
};

module.exports = {
  loginAndLazyLoadScroll,
};
