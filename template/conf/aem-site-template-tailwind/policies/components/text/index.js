const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/text/v2/text",
  description: "Default Policy for Text Component",
  policy: "policy_default",
  styles: require("../../../../../../theme/src/styles/text"),
  title: "Default Text Policy",

  attributes: {},
  configurations: {
    rtePlugins: {
      paraformat: {
        attributes: {
          features: "*",
        },
        formats: {
          attributes: {
          override: true,
          },
          item0: {
            attributes: {
              description: "Paragraph",
              tag: "p",
            },
          },
          item1: {
            attributes: {
              description: "Quote",
              tag: "blockquote",
            },
          },
          item2: {
            attributes: {
              description: "Preformatted",
              tag: "pre",
            },
          },
          item3: {
            attributes: {
              description: "Heading 2",
              tag: "h2",
            },
          },
          item4: {
            attributes: {
              description: "Heading 3",
              tag: "h3",
            },
          },
          item5: {
            attributes: {
              description: "Heading 4",
              tag: "h4",
            },
          },
          item6: {
            attributes: {
              description: "Heading 5",
              tag: "h5",
            },
          },
          item7: {
            attributes: {
              description: "Heading 6",
              tag: "h6",
            },
          },
        },
      },
      misctools: {
        attributes: {
          features: "specialchars",
        },
        specialCharsConfig: {
          chars: {
            attributes: {
              override: true,
            },
            item0: {
              attributes: {
                entity: "&amp;copy;",
                name: "copyright",
              },
            },
            item1: {
              attributes: {
                entity: "&amp;euro;",
                name: "euro",
              },
            },
            item2: {
              attributes: {
                entity: "&amp;reg;",
                name: "registered",
              },
            },
            item3: {
              attributes: {
                entity: "&amp;trade;",
                name: "trademark",
              },
            },
          },
        },
      },
      edit: {
        attributes: {
          features: "paste-plaintext,paste-wordhtml",
        }
      },
      findreplace: {
        attributes: {
          features: "*",
        }
      },
      undo: {
        attributes: {
          features: "*",
        }
      },
      spellcheck: {
        attributes: {
          features: "*",
        }
      },
      image: {
        attributes: {
          features: "*",
        }
      },
      table: {
        attributes: {
          features: "*",
        }
      },
      lists: {
        attributes: {
          features: "*",
        }
      },
      justify: {
        attributes: {
          features: "*",
        }
      },
      format: {
        attributes: {
          features: "bold,italic,underline",
        }
      },
      links: {
        attributes: {
          features: "modifylink,unlink,anchor",
        }
      },
      subsuperscript: {
        attributes: {
          features: "*",
        }
      },
    },
  }
});
