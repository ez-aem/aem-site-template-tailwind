const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/separator/v1/separator",
  description: "Default Policy for Separator Component",
  policy: "policy_default",
  styles: styles.separator,
  title: "Default Separator Policy",

  attributes: {},
});
