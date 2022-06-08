const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = [
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Header Policy for Experience Fragment Component",
    policy: "policy_header",
    styles: styles.experiencefragment.siteElements,
    title: "Header Experience Fragment Policy",

    attributes: {
      "cq:defaultElement": "header",
      "cq:styleDefaultClasses": "header",
      "cq:styleElement": "header",
    },
  }),
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Footer Policy for Experience Fragment Component",
    policy: "policy_footer",
    styles: styles.experiencefragment.siteElements,
    title: "Footer Policy for Experience Fragment",

    attributes: {
      "cq:defaultElement": "footer",
      "cq:styleDefaultClasses": "footer",
      "cq:styleElement": "footer",
    },
  }),
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Default Policy for Experience Fragment Component",
    policy: "policy_default",
    styles: styles.experiencefragment.default,
    title: "Default Experience Fragment Policy",

    attributes: {},
  }),
]; 
