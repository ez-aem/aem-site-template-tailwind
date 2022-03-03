const config = require("./test.config");

const url =
  "http://localhost:4502/content/aem-site-template-tailwind/en/home.html";

module.exports = {
  ...config,
  scenarios: [
    {
      label: "Home",
      login: config.aemLogin,
      // cookiePath: "",
      url: url,
      // referenceUrl: "",
    },
  ],
};
