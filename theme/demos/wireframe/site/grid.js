const plugin = require("tailwindcss/plugin");

function generateColumnSettings(gridColumns, breakpoint) {
  const settings = {};
  for (let i = 0; i < gridColumns; i++) {
    settings[`.aem-Grid--${breakpoint}--${i}`] = { "--aem-grid-columns": `${i}` }
    settings[`.aem-Grid--${i}`] = { "--aem-grid-columns": `${i}` }
    settings[`.aem-GridColumn--${breakpoint}--none`] = { "--aem-grid-column-width": `${gridColumns}` }
    settings[`.aem-GridColumn--${breakpoint}--${i + 1}`] = { "--aem-grid-column-width": `${i + 1}` }
    settings[`.aem-GridColumn--offset--${breakpoint}--${i}`] = { "--aem-grid-column-offset": `${i}` }
  }
  return settings;
}

module.exports = plugin(function ({ addBase, e, theme, config }) {
  const screens = theme("screens", {});
  const gridSettings = theme("aemGrid", []);
  const mediaQueries = {};

  console.log("aemGridSettings", theme("aemGrid"))

  gridSettings.forEach(grid => {
    let { columns, gap, name, maxWidth } = grid;
    console.log("grid", grid)
    console.log("columns", columns)
    console.log("gap", gap)
    console.log("maxWidth", maxWidth)

    for (let breakpoint in screens) {
      let widthType = "min-width";
      if (typeof screens[breakpoint] === "object") {
        let key = Object.keys(screens[breakpoint])[0];
        widthType = key + "-width";
        widthValue = screens[breakpoint][key];
      } else {
        widthValue = screens[breakpoint];
      }
      mediaQueries[`@media (${widthType}: ${widthValue}))`] = {
        ".aem-Grid": {
          "--aem-grid-columns": `${columns}`,
          "--aem-grid-gap": gap,
        },
        ".container.responsivegrid > .cmp-container > .aem-Grid": {
          "max-width": maxWidth,
        },
        ...generateColumnSettings(columns, breakpoint)
      }
    }
  });

  addBase({
    ".aem-Grid": {
      "display": "flex",
      "flex-wrap": "wrap",
      "gap": "var(--aem-grid-gap)",
      "margin-inline": `var(--aem-grid-gap)`,
      "width": "100%",
    },
    ".container.responsivegrid > .cmp-container > .aem-Grid": {
      // "padding-block": "var(--padding-block, var(--aem-grid-gap))",
      // "padding-inline": "var(--padding-inline, var(--aem-grid-gap))",
      // "max-width": maxWidth,
      "margin-inline": `calc(var(--aem-grid-gap) * -1)`,
    },
    ".aem-Grid .aem-Grid": {
      "margin-inline": `calc(var(--aem-grid-gap) * -1)`,
    },
    ".aem-GridColumn": {
      "width": "100%",
      "flex-basis": `calc(calc(calc(var(--aem-grid-column-width) / var(--aem-grid-columns) * 100%)) - calc(var(--aem-grid-gap) / 2))`,
      "max-width": `calc(calc(calc(var(--aem-grid-column-width) / var(--aem-grid-columns) * 100%)) - calc(var(--aem-grid-gap) / 2))`,
      "margin-inline-start": "calc(calc(var(--aem-grid-column-offset) / var(--aem-grid-columns) * 100%))",
      "padding-block": "calc(var(--padding-block, var(--aem-grid-gap)) / 2)",
      "padding-inline": "calc(var(--padding-inline, var(--aem-grid-gap)) / 2)",
      "position": "relative",
    },
    ".new.newpar.section.aem-Grid-newComponent.cq-Editable-dom": {
      "width": "100%",
      "flex-basis": "100%",
    },
    // ...defaultColumnSettings,
    ...mediaQueries,
  })
});

