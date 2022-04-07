const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/accordion/v1/accordion",
  description: "Default Policy for Accordion Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/accordion"),
  title: "Default Accordion Policy",

  attributes: {
    headingElement: "h3",
    allowedHeadingElements: "[h2,h3,h4,h5,h6]",
    components: "[group:Core Content,group:Core Form]",
  },
});
