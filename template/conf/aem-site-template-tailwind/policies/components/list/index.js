const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/list/v3/list",
  description: "Default Policy for List Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/list"),
  title: "Default List Policy",

  attributes: {
    disableChildren: false,
    disableSearch: false,
    disableStatic: false,
    disableTags: false,
    showDescription: false,
    showModificationDate: false,
  },
});
