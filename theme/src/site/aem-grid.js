const plugin = require("tailwindcss/plugin");

const generateColumns = (breakpoint, columnTotal) => {
  const styles = {};
  for (let column = 1; column <= columnTotal; column++) {
    styles[`.aem-GridColumn--${breakpoint}--${column}`] = {
      "float": "left",
      "clear": "none",
      "width": `${(column / columnTotal) * 100}%`
    }
  }
  return styles;
}

const generateOffsets = (breakpoint, columnTotal) => {
  const styles = {};
  for (let column = 0; column <= columnTotal; column++) {
    styles[`.aem-GridColumn--offset--${breakpoint}--${column}`] = {
      "margin-left": `${(column / columnTotal) * 100}%`
    }
  }
  return styles;
}

const generateGridColumns = (breakpoint, columnTotal) => {
  const styles = {};
  if (columnTotal > 0) {
    styles[`.aem-Grid--${columnTotal}`] = {
      ...generateColumns(breakpoint, columnTotal),
      ...generateOffsets(breakpoint, columnTotal)
    }

    styles[`.aem-Grid--${breakpoint}--${columnTotal}`] = {
      ...generateColumns(breakpoint, columnTotal),
      ...generateOffsets(breakpoint, columnTotal)
    }
  }
  return styles;
}

const gridLoop = (breakpoint, columnTotal) => {
  let styles = {};
  for (let column = 1; column <= columnTotal; column++) {
    styles = {
      ...styles,
      ...generateGridColumns(breakpoint, columnTotal)
    }
  }
  return styles;
}

const generateGrid = (breakpoint, columnTotal) => ({
  ...gridLoop(breakpoint, columnTotal),
  [`.aem-GridColumn--${breakpoint}--newline`]: {
    /* newline behavior */
    "display": "block",
    "clear": "both !important",
  },
  [`.aem-GridColumn--${breakpoint}--none`]: {
    /* none behavior */
    "display": "block",
    "float": "left", // Enforce the float positioning to maintain the column height and position relative to previous columns
    "clear": "none !important", // Prevent the clear:both effect of another breakpoint new line
  },

  [`.aem-GridColumn.aem-GridColumn--${breakpoint}--hide`]: {
    /* hide behavior */
    "display": "none",
  },
});

module.exports = plugin(({ addBase, e, theme, config }) => {
  const screens = theme("screens", {});
  const { columns } = theme("aemGrid", {});
  const mediaQueries = {};
  const defaultColumnSettings = generateGrid("default", columns);

  for (let breakpoint in screens) {
    let width = "min-width";
    let value = "";
    if (typeof screens[breakpoint] === "string") value = screens[breakpoint];
    else {
      width = Object.keys(screens[breakpoint])[0];
      value = screens[breakpoint][width];
    }
    mediaQueries[`@media (${width}-width: ${value})`] = { ...generateGrid(breakpoint, columns) }
  }

  console.log("mediaQueries", JSON.stringify(mediaQueries, null, 2))

  addBase({
    ".aem-Grid": {
      "display": "block",
      "width": "100%",
    },
    ".aem-Grid::before": {
      "display": "table",
      "content": "",
    },
    ".aem-Grid::after": {
      "display": "table",
      "content": "",
      "clear": "both",
    },
    ".aem-Grid-newComponent": {
      "clear": "both",
      "margin": 0
    },
    ".aem-GridColumn": {
      "clear": "both",
      "box-sizing": "border-box",
    },
    /* force showing hidden */
    ".aem-GridShowHidden > .aem-Grid > .aem-GridColumn": {
      "display": "block !important",
    },
    /* force showing hidden components in unhide mode */
    ".aem-GridShowHidden > .cmp-container > .aem-Grid > .aem-GridColumn": {
      "display": "block !important",
    },
    ...defaultColumnSettings,
    ...mediaQueries,
  })
});


