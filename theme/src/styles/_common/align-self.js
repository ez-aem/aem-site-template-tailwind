const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Secondary Axis Positioning - Align Self",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Start",
      "@cq:styleId": "self-start",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center",
      "@cq:styleId": "self-center",
    }),
    new CQStyle({
      "@cq:styleLabel": "End",
      "@cq:styleId": "self-end",
    }),
    new CQStyle({
      "@cq:styleLabel": "Stretch",
      "@cq:styleId": "self-stretch",
    }),
  ],
});
