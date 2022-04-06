const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/page/v3/page",
  description: "Includes the required client libraries.",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/page"),
  title: "Default Page Policy",

  attributes: {
    clientlibs: "[core.wcm.components.accordion.v1,core.wcm.components.tabs.v1,core.wcm.components.carousel.v1,core.wcm.components.image.v2,core.wcm.components.breadcrumb.v2,core.wcm.components.search.v1,core.wcm.components.form.text.v2,core.wcm.components.pdfviewer.v1,core.wcm.components.commons.datalayer.v1]",
  },
});
