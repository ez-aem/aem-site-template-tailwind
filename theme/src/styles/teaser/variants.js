const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Layout",
  styles: [
    new CQStyle({
      label: "Layout - Text Top",
      id: "teaser--text-top",
    }),
    new CQStyle({
      label: "Layout - Text Bottom",
      id: "teaser--text-bottom",
    }),
    new CQStyle({
      label: "Layout - Text Left",
      id: "teaser--text-left",
    }),
    new CQStyle({
      label: "Layout - Text Right",
      id: "teaser--text-right",
    }),
    new CQStyle({
      label: "Layout - Text Overlay",
      id: "teaser--text-overlay",
    }),
  ],
});
