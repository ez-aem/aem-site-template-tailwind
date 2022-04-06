const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/breadcrumb/v3/breadcrumb",
  description: "Default Policy for Breadcrumb Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/breadcrumb"),
  title: "Default Breadcrumb Policy",

  attributes: {
    "cq:styleDefaultClasses": "standard",
    disableShadowing: false,
    hideCurrent: false,
    showHidden: false,
    startLevel: 2,
  },
});
