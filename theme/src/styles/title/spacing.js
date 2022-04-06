const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Spacing",
  styles: [
    new CQStyle({
      label: "Top Margin",
      id: "title--mt-8",
    }),
  ],
});
