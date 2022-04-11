const { ComponentPolicy } = require("@ez-aem/policies");
const components = require("../components");
const styles = require("../../../theme/src/styles");

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
        droptarget: "contentfragment",
        resourceType: "core/wcm/components/contentfragment/v1/contentfragment",
      }
    },
  },
}; 

module.exports = [
  new ComponentPolicy({
    component: "core/wcm/components/container/v1/container",
    description: "Root Policy for Container Component",
    policy: "policy_root",
    styles: styles.container.root,
    title: "Container Page Root Policy",

    attributes: {
      components: components.all,
      layoutDisabled: false,
    },
    configurations: {
      "cq:authoring": cqAuthoring,
    }
  }),
  new ComponentPolicy({
    component: "core/wcm/components/container/v1/container",
    description: "Default Policy for Container Component",
    policy: "policy_default",
    styles: styles.container.default,
    title: "Default Container Policy",

    attributes: {
      components: components.all,
      layout: "responsiveGrid",
      layoutDisabled: false,
    },
    configurations: {
      "cq:authoring": cqAuthoring,
    }
  }),
]
