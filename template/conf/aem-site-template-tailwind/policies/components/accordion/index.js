const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Accordion Component",
  "@jcr:title": "Default Accordion Policy",
  "@sling:resourceType": "core/wcm/components/accordion/v1/accordion",
  "@headingElement": "h3",
  "@allowedElements": "[h2,h3,h4,h5,h6]",
  "@components": "[group:Core Content,group:Core Form]",
  "cq:styleGroups": require("../../../../../../theme/src/styles/accordion"),
});
