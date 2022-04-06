const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for List Component",
  "@jcr:title": "Default List Policy",
  "@sling:resourceType": "core/wcm/components/list/v3/list",
  "@disableChildren": false,
  "@disableSearch": false,
  "@disableStatic": false,
  "@disableTags": false,
  "@showDescription": false,
  "@showModificationDate": false,
  "cq:styleGroups": require("../../../../../../theme/src/styles/list"),
});
