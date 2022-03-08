const fse = require("fs-extra");
const { googleDrivePath, paths } = require("../test.config");

if (googleDrivePath) {
  try {
    fse.copySync(googleDrivePath, paths.bitmaps_reference);
    console.log("✔ Successfully copied refrence Images from google drive");
  } catch (error) {
    console.log("❌ error copying images from google drive: ", error);
  }
}
