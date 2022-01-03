const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, theme }) => {
  const aemGridSettings = theme("aemGrid", []);

  addBase({
    ".aem-Grid": {
      "--aem-grid-column-offset": "0",
      "display": "grid",
      "grid-template-columns": "repeat(var(--aem-grid-columns), 1fr)",
      "gap": "var(--aem-grid-gap)",
      "margin-inline": "auto",
      "width": "100%",
    },
    ".aem-GridColumn": {
      "grid-column-end": "span calc(var(--aem-grid-column-span, -1) + var(--aem-grid-column-offset))",
      "--aem-grid-margin-column-offset": "calc(var(--aem-grid-column-offset) / calc(var(--aem-grid-column-span) + var(--aem-grid-column-offset)) * 100%)",
      "--aem-grid-margin-gap-offset": "calc(var(--aem-grid-gap) / var(--aem-grid-columns))",
      "margin-inline-start": "calc(var(--aem-grid-margin-gap-offset) + var(--aem-grid-margin-column-offset))"
    },
    ".aem-Grid-newComponent": {
      "--aem-grid-column-span": "-1",
      "--aem-grid-column-offset": "1",
    },
  })

  aemGridSettings.forEach(grid => {
    const { columns, gap, name, breakpoint, breakpointType, maxWidth } = grid;
    let styles = {};
    let mediaQuery = "";
    let gridMaxWidth = "";
    styles[".aem-Grid"] = {
      "--aem-grid-gap": gap,
      "--aem-grid-column-total": `${columns}`,
    };

    if (maxWidth) {
      styles[".aem-Grid"] = {
        ...styles[".aem-Grid"],
        "--aem-grid-max-width": maxWidth,
      };

      styles[`.aem-GridColumn--offset--${name}--0`] = {
        "--aem-grid-column-offset": "0",
      }
    }

    for (let column = 1; column <= columns; column++) {
      if (maxWidth) {
        gridMaxWidth = `calc(${maxWidth} / (${column / columns}))`;
      }

      styles[`.aem-Grid--${name}--${column}`] = {
        "--aem-grid-columns": `${column}`,
        "max-width": maxWidth ? `calc((var(--aem-grid-max-width) / var(--aem-grid-column-total)) * ${column})` : "",
      };

      styles[`.aem-GridColumn--${name}--${column}`] = {
        "--aem-grid-column-span": `${column}`,
      };

      styles[`.aem-GridColumn--offset--${name}--${column}`] = {
        "--aem-grid-column-offset": `${column}`,
      };
    }

    if (breakpoint) {
      mediaQuery = breakpointType ? `${breakpointType}: ${breakpoint}` : `min-width: ${breakpoint}`;
      mediaQuery = `@media (${mediaQuery})`;
      styles = { [mediaQuery]: styles }
    }

    addBase(styles);
  })
});