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
    youtubeAutoPlayDefaultValue: false,
    youtubeAutoPlayEnabled: true,
    youtubeLoopDefaultValue: false,
    youtubeLoopEnabled: true,
    youtubeMuteDefaultValue: false,
    youtubeMuteEnabled: true,
    youtubePlaysInlineDefaultValue: false,
    youtubePlaysInlineEnabled: true,
    youtubeRelatedVideosDefaultValue: false,
    youtubeRelatedVideosEnabled: true,
  },
});
