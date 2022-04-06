const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    new CQStyle({
      label: "Library Preset",
      id: "library-preset",
      classes: "library-preset embed--preset:library-preset",
    }),
    new CQStyle({
      label: "Library Preset",
      id: "embed--video",
      classes: "embed--video aspect-video",
    }),
  ],
});
