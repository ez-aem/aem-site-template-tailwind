const { aemSite, aemPort } = require("./backstop_data/get-live-server-details");
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
  misMatchThreshold: 0.0,
  requireSameDimensions: false,
  scenarios: [
    {
      label: "Home",
      login: login,
      // cookiePath: "",
      url: `http://localhost:${aemPort + 1}/content/${aemSite}/en/home.html`,
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
    },
    {
      label: "mobile-menu",
      login: login,
      url: `http://localhost:${aemPort + 1}/content/${aemSite}/en/home.html`,
      viewports: [
        {
          label: "phone",
          width: 320,
          height: 480,
        },
      ],
      clickSelector: "#mobile-header-button",
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
