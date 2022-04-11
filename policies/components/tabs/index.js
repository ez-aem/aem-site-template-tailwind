const { ComponentPolicy } = require("@ez-aem/policies");
const { content, form } = require("../components");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/tabs/v1/tabs",
  description: "Default Policy for Tabs Component",
  policy: "policy_default",
  styles: styles.tabs,
  title: "Default Tabs Policy",

  attributes: {
    "cq:styleDefaultClasses": "tabs--horizontal",
    components: [...content, ...form],
  },
});
