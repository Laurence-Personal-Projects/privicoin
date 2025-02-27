module.exports = {
  map: false, // Disables source maps
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
