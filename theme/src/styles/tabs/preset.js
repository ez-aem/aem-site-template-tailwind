const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    // new CQStyle({
    //   label: "Library Preset",
    //   id: "library-preset",
    //   classes: "library-preset tabs--preset:library-preset",
    // }),
    new CQStyle({
      label: "Layout - Horizontal",
      id: "tabs--horizontal",
    }),
    new CQStyle({
      label: "Layout - Vertical",
      id: "tabs--vertical",
    }),
  ],
});
