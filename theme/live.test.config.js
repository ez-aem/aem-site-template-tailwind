const config = require("./test.config");

const baseURL = `http://localhost:4502/content/${config.aemSite}/`;
const queryParams = "?wcmmode=disabled";

// add pages you want tested here:
const pagesToTest = ["en/home.html", "guide.html"];

// add advanced tests here:
const scenarios = [
  // {
  //   label: "",
  //   url: ``,
  //   cookiePath: "",
  //   referenceUrl: "",
  //   readyEvent: "",
  //   readySelector: "",
  //   delay: 0,
  //   hideSelectors: [],
  //   removeSelectors: [],
  //   hoverSelector: "",
  //   clickSelector: "",
  //   postInteractionWait: 0,
  //   selectors: [],
  //   selectorExpansion: true,
  //   expect: 0,
  // },
  {
    label: "mobile-menu",
    login: config.aemLogin,
    url: baseURL + "en/home.html",
    viewports: [
      {
        label: "phone",
        width: 320,
        height: 480,
      },
    ],
    clickSelector: "#mobile-header-button",
  },
];

pagesToTest.forEach((url) => {
  const name = url.slice(url.lastIndexOf("/") + 1, url.indexOf(".html"));

  scenarios.push({
    label: name,
    login: config.aemLogin,
    url: baseURL + url + queryParams,
  });
});

module.exports = {
  ...config,
  scenarios,
  // set to one, so browser sync doesn't mess with click/inputs/scrolling during screenshots
  asyncCaptureLimit: 1,
};
