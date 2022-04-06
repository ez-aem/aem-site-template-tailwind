const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Variants",
  styles: [
    new CQStyle({
      label: "Primary",
      id: "button--primary",
    }),
    new CQStyle({
      label: "Secondary",
      id: "button--secondary",
    }),
    new CQStyle({
      label: "Quiet",
      id: "button--quiet",
    }),
  ],
});
