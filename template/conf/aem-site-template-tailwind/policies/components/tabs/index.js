const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/tabs/v1/tabs",
  description: "Default Policy for Tabs Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/tabs"),
  title: "Default Tabs Policy",

  attributes: {
    "cq:styleDefaultClasses": "tabs--horizontal",
  },
});
