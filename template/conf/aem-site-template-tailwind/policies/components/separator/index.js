const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Separator Component",
  "@jcr:title": "Default Separator Policy",
  "@sling:resourceType": "core/wcm/components/separator/v1/separator",
  "cq:styleGroups": require("../../../../../../theme/src/styles/separator"),
});
