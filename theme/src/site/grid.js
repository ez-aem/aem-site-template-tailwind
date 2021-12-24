const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, e, theme, config }) => {
  const aemGridSettings = theme("aemGrid", []);

  addBase({
    ".aem-Grid": {
      "--aem-grid-column-offset": "auto",
      "display": "grid",
      "grid-template-columns": "repeat(var(--aem-grid-columns), 1fr)",
      "gap": "var(--aem-grid-gap)",
      "margin-inline": "auto",
      "width": "100%",
    },
    ".aem-GridColumn": {
      "grid-column-start": "var(--aem-grid-column-offset, auto)",
      "grid-column-end": "var(--aem-grid-column-span, -1)"
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
        "--aem-grid-column-offset": "auto",
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
        "--aem-grid-column-span": `span ${column}`,
      };

      styles[`.aem-GridColumn--offset--${name}--${column}`] = {
        "--aem-grid-column-offset": `${column + 1}`,
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