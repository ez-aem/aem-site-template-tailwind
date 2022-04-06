const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  "policyName": "policy_default",
  "@jcr:description": "Default Policy for Text Component",
  "@jcr:title": "Default Text Policy",
  "@sling:resourceType": "core/wcm/components/text/v2/text",
  "cq:styleGroups": require("../../../../../../theme/src/styles/text"),
  "rtePlugins": {
    "paraformat": {
      "@features": "*",
      "formats": {
        "@override": true,
        "item0": {
          "@description": "Paragraph",
          "@tag": "p",
        },
        "item1": {
          "@description": "Quote",
          "@tag": "blockquote",
        },
        "item2": {
          "@description": "Preformatted",
          "@tag": "pre",
        },
        "item3": {
          "@description": "Heading 2",
          "@tag": "h2",
        },
        "item4": {
          "@description": "Heading 3",
          "@tag": "h3",
        },
        "item5": {
          "@description": "Heading 4",
          "@tag": "h4",
        },
        "item6": {
          "@description": "Heading 5",
          "@tag": "h5",
        },
        "item7": {
          "@description": "Heading 6",
          "@tag": "h6",
        },
      },
    },
    "misctools": {
      "@features": "specialchars",
      "specialCharsConfig": {
        "chars": {
          "@override": true,
          "item0": {
            "entity": "&amp;copy;",
            "name": "copyright",
          },
          "item1": {
            "entity": "&amp;euro;",
            "name": "euro",
          },
          "item2": {
            "entity": "&amp;reg;",
            "name": "registered",
          },
          "item3": {
            "entity": "&amp;trade;",
            "name": "trademark",
          },
        },
      },
    },
    "edit": {
      "@features": "paste-plaintext,paste-wordhtml",
    },
    "findreplace": {
      "@features": "*",
    },
    "undo": {
      "@features": "*",
    },
    "spellcheck": {
      "@features": "*",
    },
    "image": {
      "@features": "*",
    },
    "table": {
      "@features": "*",
    },
    "lists": {
      "@features": "*",
    },
    "justify": {
      "@features": "*",
    },
    "format": {
      "@features": "bold,italic,underline",
    },
    "links": {
      "@features": "modifylink,unlink,anchor",
    },
    "subsuperscript": {
      "@features": "*",
    },
  },
});
