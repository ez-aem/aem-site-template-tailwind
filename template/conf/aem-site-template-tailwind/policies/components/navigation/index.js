const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Navigation Component",
  "@jcr:title": "Default Navigation Policy",
  "@sling:resourceType": "core/wcm/components/navigation/v2/navigation",
  "@collectAllPages": true,
  "@disableShadowing": false,
  "@navigationRoot": "/content/aem-site-template-tailwind",
  "@structureStart": 1,
  "cq:styleGroups": require("../../../../../../theme/src/styles/navigation"),
});
