const fs = require("fs");

const text = fs.readFileSync("../theme/.env", "utf8");
const lines = text.split(/\r\n|\n/);
const siteIndex = lines.findIndex((string) => string.startsWith("AEM_SITE="));
const portIndex = lines.findIndex((string) =>
  string.startsWith("AEM_PROXY_PORT=")
);

const aemSite = lines[siteIndex].split("=")[1];
const aemPort = Number(lines[portIndex].split("=")[1]);
module.exports = { aemSite, aemPort };
