const config = require("./test.config");

const baseURL = `http://localhost:4502/content/${config.aemSite}/`;
const queryParams = "?wcmmode=disabled";

// add pages you want tested here:
const pagesToTest = [
  "en/home.html",
  "guide.html",
  "guide/manage.html",
  "guide/manage/assets.html",
  "guide/manage/site-elements.html",
  "guide/manage/authoring.html",
  "guide/manage/create-a-page.html",
  "guide/manage/publish.html",
  "guide/customize.html",
  "en/article.html",
  "en/article/duis-vitae.html",
  "en/article/donec-tristique-efficitur.html",
  "en/article/fusce-at-efficitur-mi.html",
  "en/article/morbi-dapibus-libero-velit.html",
  "en/contact-us.html",
];

// add advanced tests here:
const scenarios = [
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
};
