// must be created from template
const login = require("./backstop_data/backstop-login-info");

module.exports = {
  id: "backstop_default",
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
  scenarios: [
    {
      label: "Home",
      login: login,
      // cookiePath: "",
      url: "http://localhost:7001/content/tw-1-23-7/en/home.html",
      // referenceUrl: "",
      // readyEvent: "",
      // readySelector: "",
      // delay: 0,
      // hideSelectors: [],
      // removeSelectors: [],
      // hoverSelector: "",
      // clickSelector: "",
      // postInteractionWait: 0,
      // selectors: [],
      // selectorExpansion: true,
      // expect: 0,
      misMatchThreshold: 0.0,
      requireSameDimensions: false,
    },
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "playwright",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 1,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
