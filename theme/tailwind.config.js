module.exports = {
  darkMode: "class",
  presets: [require("./demos/wireframe/tailwind.preset.js")],
  content: [
    "./src/index.html",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./demos/**/**/**/**/*.{html,js,ts,tsx}",
  ],
  theme: {
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
