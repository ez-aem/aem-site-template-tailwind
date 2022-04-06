const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/separator/v1/separator",
  description: "Default Policy for Separator Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/separator"),
  title: "Default Separator Policy",

  attributes: {},
});
