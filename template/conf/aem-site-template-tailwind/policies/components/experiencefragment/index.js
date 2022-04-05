const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = [
  new ComponentPolicy({
    "policyName": "policy_header",
    "@jcr:description": "Header Policy for Experience Fragment Component",
    "@jcr:title": "Header Policy for Experience Fragment",
    "@sling:resourceType": "core/wcm/components/experiencefragment/v1/experiencefragment",
    "@cq:defaultElement": "header",
    "@cq:styleDefaultClasses": "header",
    "@cq:styleElement": "header",
    "cq:styleGroups": require("../../../../../../theme/src/styles/experiencefragment"),
  }),
  new ComponentPolicy({
    "policyName": "policy_footer",
    "@jcr:description": "Footer Policy for Experience Fragment Component",
    "@jcr:title": "Footer Policy for Experience Fragment",
    "@sling:resourceType": "core/wcm/components/experiencefragment/v1/experiencefragment",
    "@cq:defaultElement": "footer",
    "@cq:styleDefaultClasses": "footer",
    "@cq:styleElement": "footer",
    "cq:styleGroups": require("../../../../../../theme/src/styles/experiencefragment"),
  }),
  new ComponentPolicy({
    "policyName": "policy_default",
    "@jcr:description": "Default Policy for Experience Fragment Component",
    "@jcr:title": "Default Policy for Experience Fragment",
    "@sling:resourceType": "core/wcm/components/experiencefragment/v1/experiencefragment",
    "cq:styleGroups": require("../../../../../../theme/src/styles/experiencefragment"),
  }),
]; 
