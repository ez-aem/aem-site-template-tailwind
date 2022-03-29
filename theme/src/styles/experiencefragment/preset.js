const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Library Preset",
      "@cq:styleId": "library-preset",
      "@cq:styleClasses": "library-preset experiencefragment--preset:library-preset",
    }),
    new CQStyle({
      "@cq:styleLabel": "Site Header",
      "@cq:styleId": "site-header",
      "@cq:styleClasses": "experiencefragment--preset:site-header",
      "@cq:styleElement": "header",
    }),
    new CQStyle({
      "@cq:styleLabel": "Site Footer",
      "@cq:styleId": "site-footer",
      "@cq:styleClasses": "experiencefragment--preset:site-footer",
      "@cq:styleElement": "footer",
    }),
  ]
})