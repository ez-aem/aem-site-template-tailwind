const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/carousel/v1/carousel",
  description: "Default Policy for Carousel Component",
  policy: "policy_default",
  styles: styles.carousel,
  title: "Default Carousel Policy",

  attributes: {
    autopauseDisabled: false,
    autoplay: false,
    controlsPrepended: false,
    delay: 5000,
    components: "[/libs/core/wcm/components/embed/v2/embed,/libs/core/wcm/components/experiencefragment/v2/experiencefragment,/libs/core/wcm/components/image/v3/image,/libs/core/wcm/components/list/v3/list,/libs/core/wcm/components/teaser/v2/teaser]",
  },
});

