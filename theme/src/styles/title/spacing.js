const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Spacing",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Top Margin",
      "@cq:styleId": "title--mt-8",
    }),
  ],
});
