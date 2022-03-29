const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Main Axis Positioning - Justify Self",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Start",
      "@cq:styleId": "justify-self-start",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center",
      "@cq:styleId": "justify-self-center",
    }),
    new CQStyle({
      "@cq:styleLabel": "End",
      "@cq:styleId": "justify-self-end",
    }),
    new CQStyle({
      "@cq:styleLabel": "Stretch",
      "@cq:styleId": "justify-self-stretch",
    }),
  ],
});
