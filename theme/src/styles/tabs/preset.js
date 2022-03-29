const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Library Preset",
      "@cq:styleId": "library-preset",
      "@cq:styleClasses": "library-preset tabs--preset:library-preset",
    }),
    new CQStyle({
      "@cq:styleLabel": "Layout - Horizontal",
      "@cq:styleId": "tabs--horizontal",
    }),
    new CQStyle({
      "@cq:styleLabel": "Layout - Vertical",
      "@cq:styleId": "tabs--vertical",
    }),
  ],
});
