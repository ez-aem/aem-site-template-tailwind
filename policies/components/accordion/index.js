const { ComponentPolicy } = require("@ez-aem/policies");
const { content, form } = require("../components");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/accordion/v1/accordion",
  description: "Default Policy for Accordion Component",
  policy: "policy_default",
  styles: styles.accordion,
  title: "Default Accordion Policy",

  attributes: {
    headingElement: "h3",
    allowedHeadingElements: "[h2,h3,h4,h5,h6]",
    components: [...content, ...form],
  },
});
