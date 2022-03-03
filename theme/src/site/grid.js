const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, addUtilities, theme }) => {
  const aemGridSettings = theme("aemGrid", []);
  console.log("aemGridSettings", aemGridSettings);

  /*
    The AEM Grid overlay uses the parent wrapping element to determine the width of the overlay, 
    and therefore the logic of the column widths.
  */

  addBase({
    ".aem-Grid": {
      "--aem-grid-column-offset": "0",
      "--aem-grid-column-padding": "0",
      display: "grid",
      "grid-template-columns": "repeat(var(--aem-grid-columns), 1fr)",
      gap: "var(--aem-grid-gap)",
    },
    ".aem-GridColumn": {
      "--aem-grid-margin-column-offset":
        "calc(var(--aem-grid-column-offset) / var(--aem-grid-columns-w-offset))",
      "--aem-grid-margin-column-offset-percent":
        "calc(var(--aem-grid-margin-column-offset) * 100%)",
      "--aem-grid-margin-gap-offset":
        "calc(var(--aem-grid-gap) / var(--aem-grid-columns))",
      "--aem-grid-columns-w-offset":
        "calc(var(--aem-grid-column-span) + var(--aem-grid-column-offset))",
      "grid-column-end": "span var(--aem-grid-columns-w-offset, -1)",
      "margin-inline-start":
        "calc(var(--aem-grid-margin-column-offset-percent) + calc(var(--aem-grid-gap) * var(--aem-grid-margin-column-offset)))",
      // "padding-inline": "var(--aem-grid-column-padding)", // Used for variant to place gap setting as padding
      "word-break": "break-word", // Prevents overflow with 12 columns on mobile
    },
    "html.aem-AuthorLayer-Edit .aem-Grid-newComponent": {
      "grid-column-end": "-1",
      "grid-column-start": "1",
      height: "2.875rem",
    },
    "html:not(.aem-AuthorLayer-Edit) .aem-Grid-newComponent": {
      display: "none",
    },
    ".aem-Grid--gap-0 .cmp-container .aem-Grid": {
      gap: 0,
    },
    ".aem-Grid--gap-padding > .cmp-container > .aem-Grid": {
      "--aem-grid-column-padding": "calc(var(--aem-grid-gap) / 2)",
    },
    ".aem-Grid--gap-padding .aem-Grid .aem-Grid": {
      "--aem-grid-column-padding": "0",
      gap: 0,
    },
  });

  addUtilities({
    ".aem-Grid--grid-width": {
      "margin-inline": "var(--aem-grid-max-width-gutter)",
      width: "calc(100% - calc(var(--aem-grid-max-width-gutter) * 2))",
    },
  });
  /*
  addUtilities({
    ".cmp-container": {
      display: "grid",
      "grid-template-columns": "1fr calc(100% / 12)",
    },
    ".root > .cmp-container": {
      "grid-template-columns": "1fr",

      "& > *": {
        "grid-column": "1",
      },
    },
    ".aem-Grid--full-width > .cmp-container > *": {
      "grid-column": "1",
    },
    ":where(.cmp-container) .cmp-container": {
      "grid-template-columns": "1fr",
    },
    ".cmp-container .aem-Grid--full-width": {
      "grid-column": "1 / -1",
      "margin-inline": 0,
      "--aem-grid-column-span": "12",
    },
    ".aem-Grid--full-width": {
      "grid-column": "1 / -1",
    },
    ".aem-Grid--full-width > .cmp-container > .aem-Grid": {
      "margin-inline": 0,
      width: "100%",
      "padding-inline": 0,
      "grid-column": "1",
    },
    ":not(.aem-Grid--full-width) > .cmp-container > .aem-Grid .aem-Grid": {
      width: "100%",
      "grid-column": "1",
      "margin-inline": "0",
    },
  });
*/
  aemGridSettings.forEach((grid) => {
    const {
      columns,
      gap,
      name,
      breakpoint,
      breakpointType,
      maxWidth,
      horizontalPadding,
      maxWidthGutter,
    } = grid;
    let styles = {};
    let mediaQuery = "";
    styles[".aem-Grid"] = {
      "--aem-grid-gap": gap,
      "--aem-grid-column-total": `${columns}`,
    };

    styles[`.aem-GridColumn--${name}--newline`] = {
      "grid-column-start": "1",
    };

    styles[`.aem-GridColumn--${name}--hide`] = {
      display: "none",
    };

    styles[`.aem-GridColumn--offset--${name}--0`] = {
      "--aem-grid-column-offset": "0",
    };

    for (let column = 1; column <= columns; column++) {
      styles[`.aem-Grid--${column}`] = {
        "--aem-grid-column-total": `${column}`,
      };

      styles[`.aem-Grid--${name}--${column}`] = {
        "--aem-grid-columns": `${column}`,
        "max-width": maxWidth
          ? `calc((var(--aem-grid-max-width) / var(--aem-grid-column-total)) * ${column})`
          : "",
      };

      styles[`.aem-GridColumn--${name}--${column}`] = {
        "--aem-grid-column-span": `${column}`,
      };

      styles[`.aem-GridColumn--offset--${name}--${column}`] = {
        "--aem-grid-column-offset": `${column}`,
      };

      if (column === columns) {
        /*
        if (horizontalPadding) {
          styles[`.aem-Grid--${name}--${column}`] = {
            ...styles[`.aem-Grid--${name}--${column}`],
            "padding-inline": "var(--aem-grid-gap)",

            [`.aem-Grid--${name}--${column}`]: {
              "padding-inline": "0",
            },
          };
        }
*/

        if (maxWidth) {
          styles[".aem-Grid"] = {
            ...styles[".aem-Grid"],
            "--aem-grid-max-width": maxWidth,
          };
        }
      }
      styles[":root"] = {
        "--aem-grid-max-width-gutter": `${maxWidthGutter}`,
      };
    }

    if (breakpoint) {
      mediaQuery = breakpointType
        ? `${breakpointType}: ${breakpoint}`
        : `min-width: ${breakpoint}`;
      mediaQuery = `@media (${mediaQuery})`;
      styles = { [mediaQuery]: styles };
    }

    addBase(styles);
  });
});
