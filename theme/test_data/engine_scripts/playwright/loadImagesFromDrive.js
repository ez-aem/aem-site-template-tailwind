const fse = require("fs-extra");

module.exports = (googleDrivePath, destinationPath) => {
  try {
    fse.copySync(googleDrivePath, destinationPath);
    console.log("✔ Successfully copied refrence Images from google drive");
  } catch (error) {
    console.log("❌ error copying images from google drive: ", error);
  }
};
