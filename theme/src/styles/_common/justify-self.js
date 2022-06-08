const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Main Axis Positioning - Justify Self",
  styles: [
    new CQStyle({
      label: "Start",
      id: "justify-self-start",
    }),
    new CQStyle({
      label: "Center",
      id: "justify-self-center",
    }),
    new CQStyle({
      label: "End",
      id: "justify-self-end",
    }),
    new CQStyle({
      label: "Stretch",
      id: "justify-self-stretch",
    }),
  ],
});
