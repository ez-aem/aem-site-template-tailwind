const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Teaser Component",
  "@jcr:title": "Default Teaser Policy",
  "@sling:resourceType": "core/wcm/components/teaser/v2/teaser",
  "@showTitleType": false,
  "@titleType": "h3",
  "cq:styleGroups": require("../../../../../../theme/src/styles/teaser"),
});
