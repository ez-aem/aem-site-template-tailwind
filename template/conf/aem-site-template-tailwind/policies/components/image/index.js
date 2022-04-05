const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Image Component&#xd;&#xa;- Enable lazy loading for faster page loading.&#xd;&#xa;- Define allowed image widths for automatic loading of the image in the most optimal resolution, given the size at which each image is displayed on the page, and the visitor's pixel density.&#xd;&#xa;- Disallow direct asset upload, to force authors to first upload the images to Assets.",
  "@jcr:title": "Default Image Policy",
  "@sling:resourceType": "core/wcm/components/image/v3/image",
  "@allowedRenditionWidths": "[320,480,600,800,1024,1200,1600]",
  "@allowUpload": "false",
  "@altValueFromDAM": "true",
  "@disableLazyLoading": "false",
  "@displayPopupTitle": "true",
  "@isDecorative": "false",
  "@jpegQuality": "{Long}85",
  "@titleValueFromDAM": "true",
  "@uuidDisabled": "true",
  "cq:styleGroups": require("../../../../../../theme/src/styles/image"),
  "plugins": {
    "crop": {
      "@features": "*",
      "aspectRatios": {
        "item0": {
          "@name": "Wide Landscape",
          "@ratio": "0.6180",
        },
        "item1": {
          "@name": "Landscape",
          "@ratio": "0.8284",
        },
        "item2": {
          "@name": "Square",
          "@ratio": "1",
        },
        "item3": {
          "@name": "Portrait",
          "@ratio": "1.6180",
        }, 
      }
    }   
    "rotate": {
      "@features": "right",
    },
    "flip": {
      "@features": "-",
    }
  } 
});
