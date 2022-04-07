const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    // new CQStyle({
    //   label: "Library Preset",
    //   id: "library-preset",
    //   classes: "library-preset separator--preset:library-preset",
    // }),
  ],
});
