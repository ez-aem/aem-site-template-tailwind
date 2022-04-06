const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/progressbar/v1/progressbar",
  description: "Default Policy for Progress Bar Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/progressbar"),
  title: "Default Progress Bar Policy",

  attributes: {},
});
