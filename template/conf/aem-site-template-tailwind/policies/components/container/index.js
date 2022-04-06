const { ComponentPolicy } = require("@ez-aem/policies");

const cqAuthoring = {
  assetToComponentMapping: {
    mapping_image: {
      attributes: {
        assetGroup: "media",
        assetMimetype: "image/*",
        droptarget: "image",
        resourceType: "core/wcm/components/image/v3/image"
      }
    },
    mapping_xf: {
      attributes: {
        assetGroup: "content",
        assetMimetype: "text/html",
        droptarget: "experiencefragment",
        resourceType: "core/wcm/components/experiencefragment/v2/experiencefragment"
      }
    },
    mapping_cf: {
      attributes: {
        assetGroup: "media",
        assetMimetype: "[text/html,application/vnd.adobe.contentfragment]",
        droptarget: "image",
        resourceType: "core/wcm/components/contentfragment/v1/contentfragment",
      }
    },
  },
}; 

module.exports = [
  new ComponentPolicy({
    component: "core/wcm/components/container/v2/container",
    description: "Root Policy for Container Component",
    policy: "policy_root",
    styles: require("../../../../../../theme/src/styles/container"),
    title: "Container Page Root Policy",

    attributes: {
      components: "[group:Core Content,group:Core Form,group:Core Structure]",
      layoutDisabled: false,
    },
    configurations: {
      "cq:authoring": cqAuthoring,
    }
  }),
  new ComponentPolicy({
    component: "core/wcm/components/container/v2/container",
    description: "Default Policy for Container Component",
    policy: "policy_default",
    styles: require("../../../../../../theme/src/styles/container"),
    title: "Default Container Policy",

    attributes: {
      components: "[group:Core Content,group:Core Form,group:Core Structure]",
      layout: "responsiveGrid",
      layoutDisabled: false,
    },
    configurations: {
      "cq:authoring": cqAuthoring,
    }
  }),
]
