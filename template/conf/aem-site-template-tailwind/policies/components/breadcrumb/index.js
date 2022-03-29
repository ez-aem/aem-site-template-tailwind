const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Breadcrumb Component",
  "@jcr:title": "Default Accordion Policy",
  "@sling:resourceType": "core/wcm/components/breadcrumb/v3/breadcrumb",
  "@cq:styleDefaultClasses": "standard",
  "@disableShadowing": false,
  "@hideCurrent": false,
  "@showHidden": false,
  "@startLevel": 2,
  "cq:styleGroups": require("../../../../../../theme/src/styles/breadcrumb"),
});
