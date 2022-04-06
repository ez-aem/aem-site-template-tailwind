const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Includes the required client libraries.",
  "@jcr:title": "Default Page Policy",
  "@sling:resourceType": "core/wcm/components/page/v3/page",
  "@clientlibs": "[core.wcm.components.accordion.v1,core.wcm.components.tabs.v1,core.wcm.components.carousel.v1,core.wcm.components.image.v2,core.wcm.components.breadcrumb.v2,core.wcm.components.search.v1,core.wcm.components.form.text.v2,core.wcm.components.pdfviewer.v1,core.wcm.components.commons.datalayer.v1]",
  "cq:styleGroups": require("../../../../../../theme/src/styles/page"),
});
