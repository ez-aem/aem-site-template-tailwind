module.exports = {
  presets: [require("./demos/wireframe/wireframe.tailwind.preset.js")],
  content: ["./src/**/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    aemGrid: {
      columns: 12,
      gap: "1rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("./src/site/grid.js"),
  ],
  corePlugins: {
    container: false,
  }
}
