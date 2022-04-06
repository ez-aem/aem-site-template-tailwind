const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/teaser/v2/teaser",
  description: "Default Policy for Teaser Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/teaser"),
  title: "Default Teaser Policy",

  attributes: {
    showTitleType: false,
    titleType: "h3",
  },
});
