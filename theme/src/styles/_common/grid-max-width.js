const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Grid Max Width",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Grid Max Width",
      "@cq:styleId": "aem-Grid--max-width",
    }),
  ],
});
