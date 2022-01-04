module.exports = {
  presets: [require("./demos/wireframe/wireframe.tailwind.preset.js")],
  content: [
    "./src/index.html",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./demos/wireframe/**/**/**/*.{html,js,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    aemGrid: [
      {
        name: "default",
        columns: 12,
        gap: "1rem",
        maxWidth: "1420px",
      },
      {
        name: "phone",
        columns: 12,
        gap: "1rem",
        maxWidth: "100%",
        breakpoint: "768px",
        breakpointType: "max-width",
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
