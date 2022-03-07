const { googleDrivePath, paths } = require("../../../test.config");

module.exports = async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  await require("./loadCookies")(browserContext, scenario);
  if (googleDrivePath) {
    await require("./loadImagesFromDrive")(
      googleDrivePath,
      paths.bitmaps_reference
    );
  }
};
