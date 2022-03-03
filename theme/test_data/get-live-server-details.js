const fs = require("fs");

const text = fs.readFileSync("../theme/.env", "utf8");
const lines = text.split(/\r\n|\n/);
const siteIndex = lines.findIndex((string) => string.startsWith("AEM_SITE="));
const portIndex = lines.findIndex((string) =>
  string.startsWith("AEM_PROXY_PORT=")
);
const username = lines.findIndex((string) =>
  string.startsWith("AEM_USERNAME=")
);
const password = lines.findIndex((string) =>
  string.startsWith("AEM_PASSWORD=")
);

module.exports = {
  aemSite: lines[siteIndex].split("=")[1],
  aemPort: Number(lines[portIndex].split("=")[1]),
  login: {
    aemUsername: lines[username].split("=")[1],
    aemPassword: lines[password].split("=")[1],
  },
};
