const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/title/v3/title",
  description: "Default Policy for Title Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/title"),
  title: "Default Title Policy",

  attributes: {
    allowedTypes: ["h1","h2","h3","h4","h5","h6"],
    linkDisabled: false,
    type: "h2",
  },
});
