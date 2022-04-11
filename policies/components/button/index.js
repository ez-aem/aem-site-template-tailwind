const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/button/v2/button",
  description: "Default Policy for Button Component",
  policy: "policy_default",
  styles: styles.button,
  title: "Default Button Policy",

  attributes: {},
});
