const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    new CQStyle({
      label: "Library Preset",
      id: "library-preset",
      classes: "library-preset title--preset:library-preset",
    }),
    new CQStyle({
      label: "Display As - H1",
      id: "title--h1",
    }),
    new CQStyle({
      label: "Display As - H2",
      id: "title--h2",
    }),
    new CQStyle({
      label: "Display As - H3",
      id: "title--h3",
    }),
    new CQStyle({
      label: "Display As - H4",
      id: "title--h4",
    }),
    new CQStyle({
      label: "Display As - H5",
      id: "title--h5",
    }),
    new CQStyle({
      label: "Display As - H6",
      id: "title--h6",
    }),
  ],
});
