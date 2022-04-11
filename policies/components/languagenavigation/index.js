const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/languagenavigation/v2/languagenavigation",
  description: "Default Policy for Language Navigation Component",
  policy: "policy_default",
  styles: styles.languagenavigation,
  title: "Default Language Navigation Policy",

  attributes: {
    navigationRoot: "/content/aem-site-template-tailwind",
    structureDepth: 1,
  },
});
