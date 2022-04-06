const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Title Component",
  "@jcr:title": "Default Title Policy",
  "@sling:resourceType": "core/wcm/components/title/v3/title",
  "@allowedTypes": ["h1","h2","h3","h4","h5","h6"],
  "@linkDisabled": false,
  "@type": "h2",
  "cq:styleGroups": require("../../../../../../theme/src/styles/title"),
});
