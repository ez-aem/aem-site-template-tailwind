const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/form/button/v2/button",
  description: "Default Policy for Form Button Component",
  policy: "policy_default",
  styles: styles.form.button,
  title: "Default Form Button Policy",

  attributes: {},
});
