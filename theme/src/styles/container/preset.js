const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    new CQStyle({
      label: "Library Preset",
      id: "library-preset",
      classes: "library-preset container--preset:library-preset",
    }),
    new CQStyle({
      label: "Dark Background",
      id: "dark",
      classes: "dark dark-container container--dark",
    }),
  ],
});
