const config = require("./test.config");

const url = `http://localhost:4502/content/${config.aemSite}/en/home.html`;

module.exports = {
  ...config,
  scenarios: [
    {
      label: "Home",
      login: config.aemLogin,
      // cookiePath: "",
      url,
      // referenceUrl: "",
    },
    {
      label: "mobile-menu",
      login: config.aemLogin,
      url,
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
};
