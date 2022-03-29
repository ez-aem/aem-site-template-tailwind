const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Layout - Text Top",
      "@cq:styleId": "teaser--text-top",
    }),
    new CQStyle({
      "@cq:styleLabel": "Layout - Text Bottom",
      "@cq:styleId": "teaser--text-bottom",
    }),
    new CQStyle({
      "@cq:styleLabel": "Layout - Text Left",
      "@cq:styleId": "teaser--text-left",
    }),
    new CQStyle({
      "@cq:styleLabel": "Layout - Text Right",
      "@cq:styleId": "teaser--text-right",
    }),
    new CQStyle({
      "@cq:styleLabel": "Layout - Text Overlay",
      "@cq:styleId": "teaser--text-overlay",
    }),
  ],
});
