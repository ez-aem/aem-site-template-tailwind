const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Search Component",
  "@jcr:title": "Default Search Policy",
  "@sling:resourceType": "core/wcm/components/search/v1/search",
  "@resultsSize": 10,
  "@searchRoot": "/content/aem-site-template-tailwind",
  "@searchTermMinimumLength": 3,
  "cq:styleGroups": require("../../../../../../theme/src/styles/search"),
});
