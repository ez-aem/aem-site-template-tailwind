const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Button Component",
  "@jcr:title": "Default Button Policy",
  "@sling:resourceType": "core/wcm/components/button/v2/button",
  "cq:styleGroups": require("../../../../../../theme/src/styles/button"),
});
