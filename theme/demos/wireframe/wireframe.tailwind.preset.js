module.exports = {
  mode: "jit",
  theme: {
    aemGrid: {
      columns: 12,
      gap: "1rem",
    },
    extend: {
      fontFamily: {
        "sans": ["defaultFont", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        "serif": ["titleFont", "serif"],
        "inherit": "inherit",
      },
      colors: {
        "background": "#fff",
        "foreground": "#000",
        "link": "#2020e0",
        "link-inverted": "#B2D2FF",
        "accent": "#2954ff",
        "accent-lighter": "#436eff",
        "accent-darker": "#103be6",
        "shade-1": "#eceff1",
        "shade-2": "#cfd8dc",
        "shade-3": "#607d8b",
        "shade-4": "#455a64",
        "error": "#d7373f",
        "error-darker": "#be1e26",
        "success": "#268e6c",
        "success-darker": "#0d7553",
        "shadow": "rgba(0, 0, 0, 0.16)",
        "transparent": "rgba(0, 0, 0, 0)",
        "error": "#D7373F",
        "error-darker": "#BE1E26",
        "success": "#268E6C",
        "success-darker": "#0D7553",
      },
      boxShadow: {
        "DEFAULT": "0 0.25em 0.5em 0.2em",
      },
      aspectRatio: {
        "2/1": "2 / 1",
        "3/1": "3 / 1",
        "3/2": "3 / 2",
        "4/1": "4 / 1",
      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
