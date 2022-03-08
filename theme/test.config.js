// these values are taken from ".env" change inputs there
const {
  aemSite,
  aemPort,
  login,
  googleDrivePath,
} = require("./test_data/get-live-server-details");

module.exports = {
  id: "test_default",
  aemLogin: login,
  aemSite,
  aemPort,
  googleDrivePath,
  viewports: [
    {
      label: "phone",
      width: 320,
      height: 480,
    },
    {
      label: "desktop",
      width: 1080,
      height: 720,
    },
  ],
  onBeforeScript: "playwright/onBefore.js",
  onReadyScript: "playwright/onReady.js",
  misMatchThreshold: 0.0,
  requireSameDimensions: false,
  paths: {
    bitmaps_reference: "test_data/bitmaps_reference",
    bitmaps_test: "test_data/bitmaps_test",
    engine_scripts: "test_data/engine_scripts",
    html_report: "test_data/html_report",
    ci_report: "test_data/ci_report",
  },
  report: ["browser"],
  engine: "playwright",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  resembleOutputOptions: {
    errorColor: {
      red: 255,
      green: 0,
      blue: 255,
    },
    errorType: "movement",
    transparency: 0.3,
    ignoreAntialiasing: false,
    usePreciseMatching: true,
  },
  debug: false,
  // Headless / Headed mode, caution: snapshots will be slightly different
  debugWindow: false,
};
