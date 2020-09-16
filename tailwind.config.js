module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./views/**/*.pug",
    "./src/**/*.vue"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
