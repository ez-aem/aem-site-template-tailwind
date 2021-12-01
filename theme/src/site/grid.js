const plugin = require("tailwindcss/plugin");
console.log("plugin", plugin);

function generateColumnSettings(gridColumns, breakpoint) {
  const settings = {};
  for (let i = 0; i < gridColumns; i++) {
    settings[`.aem-GridColumn--${breakpoint}--none`] = { "--grid-column-width": `${gridColumns}` }
    settings[`.aem-GridColumn--${breakpoint}--${i + 1}`] = { "--grid-column-width": `${i + 1}` }
    settings[`.aem-GridColumn--offset--${breakpoint}--${i}`] = { "--grid-column-offset": `${i}` }
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
      "--aem-grid-gap": gap,
      display: "grid",
      gap: "var(--aem-grid-gap)",
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      "margin-inline": `var(--aem-grid-gap)`,
    },
    ".container.responsivegrid > .cmp-container > .aem-Grid": {
      "padding-block": "var(--padding-block)",
      "padding-inline": "var(--padding-inline)",
      maxWidth: maxWidth,
      "margin-inline": "auto",
    },
    ".aem-Grid .aem-Grid": {
      "margin-inline": `calc(var(--aem-grid-gap) * -1)`,
    },
    ".aem-GridColumn": {
      "grid-column": `auto / span var(--grid-column-width, ${columns})`,
      "grid-column-start": "var(--grid-column-offset)",
    },
    [`.new.newpar.section.aem-Grid-newComponent.cq-Editable-dom`]: {
      gridColumn: `1 / span ${columns}`,
    },
    ...defaultColumnSettings,
    ...mediaQueries,
  });
});
