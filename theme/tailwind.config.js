module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require("./src/site/grid.js"),
  ],
  corePlugins: {
    container: false,
  }
}
