const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Library Preset",
      "@cq:styleId": "library-preset",
      "@cq:styleClasses": "library-preset title--preset:library-preset",
    }),
    new CQStyle({
      "@cq:styleLabel": "Display As - H1",
      "@cq:styleId": "title--h1",
    }),
    new CQStyle({
      "@cq:styleLabel": "Display As - H2",
      "@cq:styleId": "title--h2",
    }),
    new CQStyle({
      "@cq:styleLabel": "Display As - H3",
      "@cq:styleId": "title--h3",
    }),
    new CQStyle({
      "@cq:styleLabel": "Display As - H4",
      "@cq:styleId": "title--h4",
    }),
    new CQStyle({
      "@cq:styleLabel": "Display As - H5",
      "@cq:styleId": "title--h5",
    }),
    new CQStyle({
      "@cq:styleLabel": "Display As - H6",
      "@cq:styleId": "title--h6",
    }),
  ],
});
