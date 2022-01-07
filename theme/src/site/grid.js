const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, theme }) => {
  const aemGridSettings = theme("aemGrid", []);

  addBase({
    ".aem-Grid": {
      "--aem-grid-column-offset": "0",
      display: "grid",
      "grid-template-columns": "repeat(var(--aem-grid-columns), 1fr)",
      gap: "var(--aem-grid-gap)",
      "margin-inline": "auto",
      width: "100%",
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
    },
    ".aem-Grid-newComponent": {
      "grid-column-end": "-1",
      "grid-column-start": "1",
    },
  });

  aemGridSettings.forEach((grid) => {
    const {
      columns,
      gap,
      name,
      breakpoint,
      breakpointType,
      maxWidth,
      horizontalPadding,
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
        if (horizontalPadding) {
          styles[`.aem-Grid--${name}--${column}`] = {
            ...styles[`.aem-Grid--${name}--${column}`],
            "padding-inline": "var(--aem-grid-gap)",

            [`.aem-Grid--${name}--${column}`]: {
              "padding-inline": "0",
            },
          };
        }

        if (maxWidth) {
          styles[".aem-Grid"] = {
            ...styles[".aem-Grid"],
            "--aem-grid-max-width": maxWidth,
          };
        }
      }
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
