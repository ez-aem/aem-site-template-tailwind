const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Tabs Component",
  "@jcr:title": "Default Tabs Policy",
  "@sling:resourceType": "core/wcm/components/tabs/v1/tabs",
  "@cq:styleDefaultClasses": "tabs--horizontal",
  "cq:styleGroups": require("../../../../../../theme/src/styles/tabs"),
});
