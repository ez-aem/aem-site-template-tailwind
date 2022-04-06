const { ComponentPolicy } = require("@ez-aem/policies");

const cqAuthoring = {
  "assetToComponentMapping": {
    "mapping_image": {
      "@assetGroup": "media",
      "@assetMimetype": "image/*",
      "@droptarget": "image",
      "@resourceType": "core/wcm/components/image/v3/image"
    },
    "mapping_xf": {
      "@assetGroup": "content",
      "@assetMimetype": "text/html",
      "@droptarget": "experiencefragment",
      "@resourceType": "core/wcm/components/experiencefragment/v2/experiencefragment"
    },
    "mapping_cf": {
      "@assetGroup": "media",
      "@assetMimetype": "[text/html,application/vnd.adobe.contentfragment]",
      "@droptarget": "image",
      "@resourceType": "core/wcm/components/contentfragment/v1/contentfragment"
    },
  },
}; 

module.exports = [
  new ComponentPolicy({
    "policyName": "policy_root",
    "@jcr:description": "Root Policy for Container Component",
    "@jcr:title": "Container Page Root Policy",
    "@sling:resourceType": "core/wcm/components/container/v1/container",
    "@components": "[group:Core Content,group:Core Form,group:Core Structure]",
    "@layoutDisabled": false,
    "cq:styleGroups": require("../../../../../../theme/src/styles/container"),
    "cq:authoring": cqAuthoring,  
  }),
  new ComponentPolicy({
    "policyName": "policy_content",
    "@jcr:description": "Default Policy for Container Component",
    "@jcr:title": "Default Container Policy",
    "@sling:resourceType": "core/wcm/components/container/v1/container",
    "@components": "[group:Core Content,group:Core Form,group:Core Structure]",
    "@layout": "responsiveGrid",
    "@layoutDisabled": false,
    "cq:styleGroups": require("../../../../../../theme/src/styles/container"),
    "cq:authoring": cqAuthoring,
  }),
]
