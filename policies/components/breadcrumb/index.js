const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/breadcrumb/v3/breadcrumb",
  description: "Default Policy for Breadcrumb Component",
  policy: "policy_default",
  styles: styles.breadcrumb,
  title: "Default Breadcrumb Policy",

  attributes: {
    "cq:styleDefaultClasses": "standard",
    disableShadowing: false,
    hideCurrent: false,
    showHidden: false,
    startLevel: 2,
  },
});
