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
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      const scrollCheck = setInterval(() => {
        if (
          window.scrollY >=
          Math.floor(document.body.scrollHeight - window.innerHeight - 1)
        ) {
          clearInterval(scrollCheck);
          resolve();
        }
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    });
  });

  await page.waitForFunction(() => {
    return Array.from(document.images).every((i) => {
      console.log(i.complete);
      return i.complete;
    });
  });

  // waiting for browser sync notification to go away
  await page.waitForSelector("#__bs_notify__", { state: "detached" });
};
