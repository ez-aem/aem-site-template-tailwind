const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Form Container Component",
  "@jcr:title": "Default Form Container Policy",
  "@sling:resourceType": "core/wcm/components/form/container/v2/container",
  "@components": "[group:Core Content,group:Core Form]",
  "cq:styleGroups": require("../../../../../../theme/src/styles/form-container"),
});
