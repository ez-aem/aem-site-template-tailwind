const { ComponentPolicy } = require("@ez-aem/policies");
const styles = require("../../../theme/src/styles");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/form/container/v2/container",
  description: "Default Policy for Form Container Component",
  policy: "policy_default",
  styles: styles.form.container,
  title: "Default Form Container Policy",

  attributes: {
    components: "[group:Core Content,group:Core Form]",
  },
});
