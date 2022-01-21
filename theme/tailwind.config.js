module.exports = {
  presets: [require("./demos/wireframe/wireframe.tailwind.preset.js")],
  content: [
    "./src/index.html",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./demos/wireframe/**/**/**/*.{html,js,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    aemGrid: [
      {
        name: "default",
        columns: 12,
        gap: "1rem",
        // maxWidth: "1420px",
        horizontalPadding: true,
      },
      {
        name: "phone",
        columns: 12,
        gap: "1rem",
        // maxWidth: "100%",
        breakpoint: "768px",
        breakpointType: "max-width",
        horizontalPadding: true,
      },
    ],
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("./src/site/grid.js")],
  corePlugins: {
    container: false,
  },
};
