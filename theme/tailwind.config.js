module.exports = {
  presets: [require("./demos/wireframe/tailwind.preset.js")],
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
        horizontalPadding: true,
      },
      {
        name: "phone",
        columns: 12,
        gap: "1rem",
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
