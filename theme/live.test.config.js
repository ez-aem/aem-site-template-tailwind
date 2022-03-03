const config = require("./test.config");

module.exports = {
  ...config,
  scenarios: [
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
      label: "Home",
      login: config.aemLogin,
      url: `http://localhost:${config.aemPort + 1}/content/${
        config.aemSite
      }/en/home.html`,
      cookiePath: "",
      referenceUrl: "",
      readyEvent: "",
      readySelector: "",
      delay: 0,
      hideSelectors: [],
      removeSelectors: [],
      hoverSelector: "",
      clickSelector: "",
      postInteractionWait: 0,
      selectors: [],
      selectorExpansion: true,
      expect: 0,
    },
    {
      label: "mobile-menu",
      login: config.aemLogin,
      url: `http://localhost:${config.aemPort + 1}/content/${
        config.aemSite
      }/en/home.html`,
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
  // set to one, so browser sync doesn't mess with click/inputs/scrolling during screenshots
  asyncCaptureLimit: 1,
};
