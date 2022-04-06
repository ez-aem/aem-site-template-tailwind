const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/search/v1/search",
  description: "Default Policy for Search Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/search"),
  title: "Default Search Policy",

  attributes: {
    resultsSize: 10,
    searchRoot: "/content/aem-site-template-tailwind",
    searchTermMinimumLength: 3,
  },
});
