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

const config = {
  aemSite: liveServerDetails.aemSite,

  timeout: 30000, // Timeout is shared between all tests.
  webServer: {
    command: "npm run live",
    port: liveServerDetails.aemPort,
  },
  use: {
    headless: true,
    baseURL: "http://localhost:7001",
  },
  projects: [
    // {
    //   name: 'Home Desktop 1280x720',
    //   testMatch: 'home.spec.js',
    //   retries: 0,
    //   use: {
    //     viewport: {width: 1280, height: 720},
    //   }
    // },
    // {
    //   name: 'Home Desktop 1920x1080',
    //   testMatch: 'home.spec.js',
    //   retries: 0,
    //   use: {
    //     viewport: {width: 1920, height: 1080},
    //   }
    // },
    {
      name: "Home Mobile 640x1136",
      testMatch: "home-mobile.spec.js",
      retries: 0,
      use: {
        viewport: { width: 640, height: 900 },
      },
    },
    // {
    //   name: 'Home Mobile 320x480',
    //   testMatch: 'home-mobile.spec.js',
    //   retries: 0,
    //   use: {
    //     viewport: {width: 320, height: 480},
    //   }
    // },
  ],
};
module.exports = config;
