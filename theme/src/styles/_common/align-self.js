const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Secondary Axis Positioning - Align Self",
  styles: [
    new CQStyle({
      label: "Start",
      id: "self-start",
    }),
    new CQStyle({
      label: "Center",
      id: "self-center",
    }),
    new CQStyle({
      label: "End",
      id: "self-end",
    }),
    new CQStyle({
      label: "Stretch",
      id: "self-stretch",
    }),
  ],
});
