const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Form Button Component",
  "@jcr:title": "Default Form Button Policy",
  "@sling:resourceType": "core/wcm/components/form/button/v2/button",
  "cq:styleGroups": require("../../../../../../theme/src/styles/form-button"),
});
