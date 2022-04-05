const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Embed Component",
  "@jcr:title": "Default Embed Policy",
  "@sling:resourceType": "core/wcm/components/embed/v2/embed",
  "@embeddablesDisabled": false,
  "@htmlDisabled": false,
  "@urlDisabled": false,
  "@youtubeAAutoPlayDefaultValue": false,
  "@youtubeAutoPlayEnabled", true,
  "@youtubeLoopDefaultValue": false,
  "@yoututbeLoopEnabled": true,
  "@youtubePlaysInlineDefaultValue": false,
  "@youtubeplaysInlineEnabled": true,
  "@youtubeRelatedVideosDefaultValue": false,
  "@youtubeRelatedVideosEnabled": true
  "cq:styleGroups": require("../../../../../../theme/src/styles/embed"),
});
