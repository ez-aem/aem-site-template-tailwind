const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Progress Bar Component",
  "@jcr:title": "Default Progress Bar Policy",
  "@sling:resourceType": "core/wcm/components/progressbar/v1/progressbar",
  "cq:styleGroups": require("../../../../../../theme/src/styles/progressbar"),
});
