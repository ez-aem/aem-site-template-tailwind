const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/embed/v2/embed",
  description: "Default Policy for Embed Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/embed"),
  title: "Default Embed Policy",

  attributes: {
    embeddablesDisabled: false,
    htmlDisabled: false,
    urlDisabled: false,
    youtubeAAutoPlayDefaultValue: false,
    youtubeAutoPlayEnabled: true,
    youtubeLoopDefaultValue: false,
    yoututbeLoopEnabled: true,
    youtubePlaysInlineDefaultValue: false,
    youtubeplaysInlineEnabled: true,
    youtubeRelatedVideosDefaultValue: false,
    youtubeRelatedVideosEnabled: true,
  },
});
