const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Library Preset",
      "@cq:styleId": "library-preset",
      "@cq:styleClasses": "library-preset teaser--preset:library-preset",
    }),
    new CQStyle({
      "@cq:styleLabel": "Dark Background",
      "@cq:styleId": "teaser--dark",
    }),
  ],
});
