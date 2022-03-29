const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Carousel Component",
  "@jcr:title": "Default Carousel Policy",
  "@sling:resourceType": "core/wcm/components/carousel/v1/carousel",
  "@autopauseDisabled": false,
  "@autoplay": false,
  "@controlsPrepended": false,
  "@delay": 5000,
  "@components": "[/libs/core/wcm/components/embed/v2/embed,/libs/core/wcm/components/experiencefragment/v2/experiencefragment,/libs/core/wcm/components/image/v3/image,/libs/core/wcm/components/list/v3/list,/libs/core/wcm/components/teaser/v2/teaser]",
  "cq:styleGroups": require("../../../../../../theme/src/styles/carousel"),
});
