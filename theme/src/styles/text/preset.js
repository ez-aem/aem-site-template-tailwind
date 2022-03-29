const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Library Preset",
      "@cq:styleId": "library-preset",
      "@cq:styleClasses": "library-preset text--preset:library-preset",
    }),
    new CQStyle({
      "@cq:styleLabel": "Prose",
      "@cq:styleId": "var-prose",
    }),
    new CQStyle({
      "@cq:styleLabel": "Prose - No Max Width",
      "@cq:styleId": "var-prose var-max-w-none",
    }),
  ],
});
