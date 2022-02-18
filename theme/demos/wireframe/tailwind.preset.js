const withOpacity = (variable) => {
  return ({ withOpacity }) =>
    withOpacity
      ? `rgba(var(--${variable}, ${withOpacity}))`
      : `rgb(var(--${variable}))`;
};

module.exports = {
  darkMode: "class",
  theme: {
    aemGrid: [
      {
        name: "default",
        columns: 12,
        gap: "1rem",
        maxWidth: "1420px",
      },
      {
        name: "phone",
        columns: 4,
        gap: "1rem",
        maxWidth: "100%",
        breakpoint: "860px",
        breakpointType: "max-width",
      },
    ],
    extend: {
      aspectRatio: {
        "2/1": "2 / 1",
        "3/1": "3 / 1",
        "3/2": "3 / 2",
        "4/1": "4 / 1",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        DEFAULT: "0 0.25em 0.5em 0.2em",
      },
      colors: {
        background: withOpacity("color-background"),
        foreground: withOpacity("color-foreground"),
        link: withOpacity("color-link"),
        focus: withOpacity("color-focus"),
        accent: withOpacity("color-accent"),
        "accent-lighter": withOpacity("color-accent-lighter"),
        "accent-darker": withOpacity("color-accent-darker"),
        "shade-1": withOpacity("color-shade-1"),
        "shade-2": withOpacity("color-shade-2"),
        "shade-3": withOpacity("color-shade-3"),
        "shade-4": withOpacity("color-shade-4"),
        "shade-5": withOpacity("color-shade-5"),
        error: withOpacity("color-error"),
        "error-darker": withOpacity("color-error-darker"),
        success: withOpacity("color-success"),
        "success-darker": withOpacity("color-success-darker"),
        shadow: "rgba(0, 0, 0, 0.16)",
        transparent: "rgba(0, 0, 0, 0)",
      },
      fontFamily: {
        sans: "defaultFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
        serif: "titleFont, serif",
        inherit: "inherit",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.foreground"),
            "--tw-prose-invert-headings": theme("colors.background"),
            "--tw-prose-links": theme("colors.link"),
            "--tw-prose-links-hover": theme("colors.accent-darker"),
            "--tw-prose-invert-links": theme("colors.link"),
            a: {
              color: "var(--tw-prose-links)",
              "text-decoration": "none",
              "&:hover": {
                color: theme("colors.link"),
                "text-decoration": "underline",
              },
            },
            h1: {
              "font-size": "3rem",
              "line-height": "1",
              "font-family": theme("fontFamily.serif"),
              "font-weight": theme("fontWeight.light"),
              color: "var(--tw-prose-headings)",
            },
            h2: {
              "font-size": "2.25rem",
              "line-height": "2.25rem",
              "font-family": theme("fontFamily.serif"),
              "font-weight": theme("fontWeight.semibold"),
              color: "var(--tw-prose-headings)",
            },
            h3: {
              "font-size": "1.5rem",
              "line-height": "2rem",
              "font-family": theme("fontFamily.serif"),
              "font-weight": theme("fontWeight.semibold"),
              color: "var(--tw-prose-headings)",
            },
            h4: {
              "font-size": "1.25rem",
              "line-height": "1.75rem",
              "font-family": theme("fontFamily.serif"),
              "font-weight": theme("fontWeight.semibold"),
              color: "var(--tw-prose-headings)",
            },
            h5: {
              "font-size": "1rem",
              "line-height": "1.5rem",
              "font-family": theme("fontFamily.serif"),
              "font-weight": theme("fontWeight.semibold"),
              color: "var(--tw-prose-headings)",
            },
            h6: {
              "font-size": ".75rem",
              "line-height": "1rem",
              "font-family": theme("fontFamily.sans"),
              "font-weight": theme("fontWeight.semibold"),
              color: theme("colors.shade-4"),
              "text-transform": "uppercase",
            },
            pre: {
              "--tw-prose-pre-code": theme("colors.foreground"),
              "--tw-prose-pre-bg": theme("colors.shade-1"),
            },
            table: {
              border: `1px solid var(--tw-prose-td-borders)`,
              tbody: {
                td: {
                  "&:first-child": {
                    "padding-left": ".5rem",
                  },
                  "& + td": {
                    "border-left": `1px solid var(--tw-prose-td-borders)`,
                  },
                },
                th: {
                  "&:first-child": {
                    "padding-left": ".5rem",
                  },
                  "& + th": {
                    "border-left": `1px solid var(--tw-prose-td-borders)`,
                  },
                },
              },
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-invert-headings": theme("colors.foreground"),
            "--tw-prose-invert-links": theme("colors.link"),
            "--tw-prose-pre-code": theme("colors.shade-1"),
            "--tw-prose-pre-bg": theme("colors.shade-4"),
            "--tw-prose-td-borders": theme("colors.shade-4"),
            "--tw-prose-bullets": theme("colors.shade-1"),
            "--tw-prose-body": theme("colors.foreground"),
            h6: {
              color: theme("colors.shade-1"),
            },
          },
        },
      }),
    },
    screens: {
      phone: { max: "860px" },
      default: "861px",
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
