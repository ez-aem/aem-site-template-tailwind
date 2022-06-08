const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Grid Max Width",
  styles: [
    new CQStyle({
      label: "Grid Max Width",
      id: "aem-Grid--max-width",
    }),
  ],
});
