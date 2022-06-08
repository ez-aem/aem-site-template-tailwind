const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/image/v3/image",
  description: "Default Policy for Image Component&#xd;&#xa;- Enable lazy loading for faster page loading.&#xd;&#xa;- Define allowed image widths for automatic loading of the image in the most optimal resolution, given the size at which each image is displayed on the page, and the visitor's pixel density.&#xd;&#xa;- Disallow direct asset upload, to force authors to first upload the images to Assets.",
  policy: "policy_default",
  styles: styles.image,
  title: "Default Image Policy",

  attributes: {
    allowedRenditionWidths: [320,480,600,800,1024,1200,1600],
    allowUpload: false,
    altValueFromDAM: true,
    disableLazyLoading: false,
    displayPopupTitle: true,
    isDecorative: false,
    jpegQuality: "{Long}85",
    titleValueFromDAM: true,
    uuidDisabled: true,
  },

  configurations: {
    plugins: {
      crop: {
        attributes: {
          features: "*",
        },
        aspectRatios: {
          item0: {
            attributes: {
              name: "Wide Landscape",
              ratio: "0.6180",
            },
          },
          item1: {
            attributes: {
              name: "Landscape",
              ratio: "0.8284",
            },
          },
          item2: {
            attributes: {
              name: "Square",
              ratio: "1",
            },
          },
          item3: {
            attributes: {
              name: "Portrait",
              ratio: "1.6180",
            }, 
          }, 
        }
      },
      rotate: {
        attributes: {
          features: "right",
        },
      },
      flip: {
        attributes: {
          features: "-",
        },
      }
    } 
  },
});
