const fs = require("fs");

const getLiveServerDetails = () => {
  const output = {};
  const text = fs.readFileSync("../theme/.env", "utf8");
  const lines = text.split(/\r\n|\n/);
  const siteIndex = lines.findIndex((string) => string.startsWith("AEM_SITE="));
  const portIndex = lines.findIndex((string) =>
    string.startsWith("AEM_PROXY_PORT=")
  );

  output.aemSite = lines[siteIndex].split("=")[1];
  output.aemPort = Number(lines[portIndex].split("=")[1]);

  return output;
};
const liveServerDetails = getLiveServerDetails();

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
  await page.waitForTimeout(2000);
};

module.exports = {
  liveServerDetails,
  loginAndLazyLoadScroll,
};
