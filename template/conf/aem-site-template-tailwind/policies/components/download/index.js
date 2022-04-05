const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Download Component",
  "@jcr:title": "Default Download Policy",
  "@sling:resourceType": "core/wcm/components/download/v2/download",
  "@allowUpload": false,
  "@displayFilename": true,
  "@displayFormat": true,
  "@displaySize": true,
  "@hideTitleLink": false,
  "@titleType": "h3",
  "cq:styleGroups": require("../../../../../../theme/src/styles/download"),
});
