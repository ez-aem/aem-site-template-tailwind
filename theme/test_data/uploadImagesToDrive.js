const fse = require("fs-extra");
const { googleDrivePath, paths } = require("../test.config");

if (googleDrivePath) {
  try {
    fse.copySync(paths.bitmaps_reference, googleDrivePath);
    console.log(
      "✔ Successfully copied new refrance images to google drive folder!"
    );
  } catch (error) {
    console.log("❌ error copying images to google drive: ", error);
  }
}
