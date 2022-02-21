const { devices } = require("@playwright/test");

const config = {
  timeout: 30000, // Timeout is shared between all tests.
  use: {
    fullPage: true,
    headless: false,
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
        viewport: { width: 640, height: 1136 },
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
