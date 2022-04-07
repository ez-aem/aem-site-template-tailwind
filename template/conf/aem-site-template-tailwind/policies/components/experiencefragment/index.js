const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = [
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Header Policy for Experience Fragment Component",
    policy: "policy_header",
    styles: require("../../../../../../theme/src/styles/experiencefragment/site-elements"),
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
    styles: require("../../../../../../theme/src/styles/experiencefragment/site-elements"),
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
    styles: require("../../../../../../theme/src/styles/experiencefragment"),
    title: "Default Experience Fragment Policy",

    attributes: {},
  }),
]; 
