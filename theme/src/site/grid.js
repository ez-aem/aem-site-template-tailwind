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
  const { columns, gap } = theme("aemGrid", {});
  const mediaQueries = {};
  const defaultColumnSettings = generateColumnSettings(columns, "default");
  let minWidth = 0;
  let maxWidth = 0;

  for (let breakpoint in screens) {
    mediaQueries[`@media (min-width: ${minWidth}) and (max-width: ${screens[breakpoint]})`] = {
      ".container.responsivegrid > .cmp-container > .aem-Grid": {
        "max-width": screens[breakpoint],
      },
      ...generateColumnSettings(columns, `breakpoint-${breakpoint}`)
    }
    minWidth = screens[breakpoint];
    maxWidth = screens[breakpoint];
  }

  addBase({
    ".aem-Grid": {
      "--aem-grid-columns": `${columns}`,
      "--aem-grid-gap": gap,
      "display": "flex",
      "flex-wrap": "wrap",
      "gap": "var(--aem-grid-gap)",
      "margin-inline": `var(--aem-grid-gap)`,
      "width": "100%",
    },
    ".container.responsivegrid > .cmp-container > .aem-Grid": {
      "padding-block": "var(--padding-block)",
      "padding-inline": "var(--padding-inline)",
      "max-width": maxWidth,
      "margin-inline": "auto",
    },
    ".aem-Grid .aem-Grid": {
      "margin-inline": `calc(var(--aem-grid-gap) * -1)`,
    },
    ".aem-GridColumn": {
      "width": "100%",
      "flex-basis": `calc(calc(calc(var(--aem-grid-column-width) / var(--aem-grid-columns) * 100%)) - calc(var(--aem-grid-gap) / 2))`,
      "max-width": `calc(calc(calc(var(--aem-grid-column-width) / var(--aem-grid-columns) * 100%)) - calc(var(--aem-grid-gap) / 2))`,
      "margin-inline-start": "calc(calc(var(--aem-grid-column-offset) / var(--aem-grid-columns) * 100%))",
      "position": "relative",
    },
    ".new.newpar.section.aem-Grid-newComponent.cq-Editable-dom": {
      "width": "100%",
      "flex-basis": "100%",
    },
    ...defaultColumnSettings,
    ...mediaQueries,
  })
});

