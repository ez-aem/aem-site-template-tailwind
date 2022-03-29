const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Library Preset",
      "@cq:styleId": "library-preset",
      "@cq:styleClasses": "library-preset separator--preset:library-preset",
    }),
    new CQStyle({
      "@cq:styleLabel": "Standard Size",
      "@cq:styleId": "separator--standard",
    }),
    new CQStyle({
      "@cq:styleLabel": "Small Size",
      "@cq:styleId": "separator--small",
    }),
  ],
});
