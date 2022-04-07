const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    new CQStyle({
      label: "Library Preset",
      id: "library-preset",
      classes: "library-preset contentfragmentlist--preset:library-preset",
    }),
  ],
});
