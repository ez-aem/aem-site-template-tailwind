const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/download/v2/download",
  description: "Default Policy for Download Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/download"),
  title: "Default Download Policy",

  attributes: {
    allowUpload: false,
    displayFilename: true,
    displayFormat: true,
    displaySize: true,
    hideTitleLink: false,
    titleType: "h3",
  },
});
