const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
  };

  console.log("Webpack Aliases:", config.resolve.alias); // Debugging output
  return config;
};
