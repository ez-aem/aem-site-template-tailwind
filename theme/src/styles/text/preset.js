const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    // new CQStyle({
    //   label: "Library Preset",
    //   id: "library-preset",
    //   classes: "library-preset text--preset:library-preset",
    // }),
    new CQStyle({
      label: "Prose",
      id: "text--prose",
    }),
    new CQStyle({
      label: "Prose - No Max Width",
      id: "text--prose--max-w-none",
      classes: "text--prose max-w-none",
    }),
  ],
});
