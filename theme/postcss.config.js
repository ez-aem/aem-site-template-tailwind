module.exports = (ctx) => ({
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-custom-properties": {},
    "tailwindcss/nesting": {},
    "tailwindcss": {},
    "autoprefixer": {},
    "cssnano": ctx.env === "production" ? {} : false
  }
})
