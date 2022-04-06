const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Language Navigation Component",
  "@jcr:title": "Default Language Navigation Policy",
  "@sling:resourceType": "core/wcm/components/languagenavigation/v2/languagenavigation",
  "@structureDepth": 1,
  "cq:styleGroups": require("../../../../../../theme/src/styles/languagenavigation"),
});
