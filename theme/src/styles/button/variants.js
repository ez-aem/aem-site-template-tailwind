const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Variants",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Primary",
      "@cq:styleId": "button--primary",
    }),
    new CQStyle({
      "@cq:styleLabel": "Secondary",
      "@cq:styleId": "button--secondary",
    }),
    new CQStyle({
      "@cq:styleLabel": "Quiet",
      "@cq:styleId": "button--quiet",
    }),
  ],
});
