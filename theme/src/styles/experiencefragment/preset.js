const { CQStyle, CQStyleGroup } = require("@ez-aem/policies");

module.exports = new CQStyleGroup({
  label: "Presets",
  styles: [
    // new CQStyle({
    //   label: "Library Preset",
    //   id: "library-preset",
    //   classes: "library-preset experiencefragment--preset:library-preset",
    // }),
    new CQStyle({
      label: "Site Header",
      id: "site-header",
      classes: "experiencefragment--preset:site-header",
      "@cq:styleElement": "header",
    }),
    new CQStyle({
      label: "Site Footer",
      id: "site-footer",
      classes: "experiencefragment--preset:site-footer",
      "@cq:styleElement": "footer",
    }),
  ],
});
