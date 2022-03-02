const fs = require("fs");
const startTime = Date.now();
const child_process = require("child_process");
const packageJSON = JSON.parse(fs.readFileSync("./package.json"));

const AEM_URL = process.env.AEM_URL;
const SITE_NAME = process.env.AEM_SITE;
// Need to make a way for this to exist throughout the entire example content
const TMPL_NAME = packageJSON.name;
const CREDENTIALS = process.env.CREDENTIALS || "admin:admin";
let VERSION = packageJSON.version;
let [major, minor, patch] = packageJSON.version.split(".");

const deletePreviousZip = () => {
  if (fs.existsSync(`./${TMPL_NAME}-${VERSION}.zip`))
    runCmd(`rm ${TMPL_NAME}-${VERSION}.zip`);
  else console.log(`Could not find or delete ${TMPL_NAME}-${VERSION}.zip`);
};

const updatePackageJSON = () => {
  packageJSON.version = [major, minor, parseInt(patch) + 1]
    .join(".")
    .toString();
  fs.writeFileSync("./package.json", JSON.stringify(packageJSON, null, 2));
  console.log(
    `Package.json updated to v${packageJSON.version} from v${VERSION}`
  );
  VERSION = packageJSON.version;
};

const runCmd = (cmd, log) => {
  const resp = child_process.execSync(cmd);
  const result = resp.toString("UTF8");
  if (log) console.log(result);
  return result;
};

const log = (msg) => {
  console.log(`\n\n${"~".repeat(120)}`);
  console.log(` ${msg}`);
  console.log("~".repeat(120));
};

log(`Removing Site Configurations - /conf/${SITE_NAME}`);
runCmd(
  `curl -u ${CREDENTIALS} -F ':operation=delete' ${AEM_URL}/conf/${SITE_NAME}`
);
log(`Removing DAM Content - /content/dam/${SITE_NAME}`);
runCmd(
  `curl -u ${CREDENTIALS} -F ':operation=delete' ${AEM_URL}/content/dam/${SITE_NAME}`
);
log(
  `Removing Experience Fragments - ${AEM_URL}/content/experience-fragments/${SITE_NAME}`
);
runCmd(
  `curl -u ${CREDENTIALS} -F ':operation=delete' ${AEM_URL}/content/experience-fragments/${SITE_NAME}`
);
log(`Removing Content - /content/${SITE_NAME}`);
runCmd(
  `curl -u ${CREDENTIALS} -F ':operation=delete' ${AEM_URL}/content/${SITE_NAME}`
);
log(
  `Removing Site Template - /conf/global/site-templates/${TMPL_NAME}-${VERSION}`
);
runCmd(
  `curl -u ${CREDENTIALS} -F ':operation=delete' ${AEM_URL}/conf/global/site-templates/${TMPL_NAME}-${VERSION}`
);
log(`Removing Previous Zip File ${TMPL_NAME}-${VERSION}.zip`);
deletePreviousZip();
log(`Updating package.json with new versioning`);
updatePackageJSON();
log(`Building  Site Template v${VERSION}`);
runCmd(`npm run build`, true);
log(`Deploying ${TMPL_NAME}-${VERSION}.zip to ${AEM_URL}`);
runCmd(
  `curl -u ${CREDENTIALS} -F file=@${TMPL_NAME}-${VERSION}.zip ${AEM_URL}/bin/wcm/site-template/import`
);
log(`Re-generatinig '${SITE_NAME}' site from template`);
runCmd(
  `curl -u ${CREDENTIALS} -F 'cmd=createSiteFromSiteTemplate' -F 'operation=asyncCreateSiteFromSiteTemplate' -F '_charset_=utf-8' -F 'siteTemplate=/conf/global/site-templates/${TMPL_NAME}-${VERSION}' -F 'siteTitle=${SITE_NAME}' ${AEM_URL}/bin/asynccommand`
);
log(
  `Successfully redeployed Site Template v${VERSION} in ${
    (Date.now() - startTime) / 1000
  }s`
);
// /bin/asynccommand
// cmd: createSiteFromSiteTemplate
// operation: asyncCreateSiteFromSiteTemplate
// _charset_: utf-8
// siteTitle: aem-site-template-tailwind
// siteName:
// path: aem-site-template-tailwind
// siteTemplatePath: /conf/global/site-templates/aem-site-template-tailwind-1.23.21
