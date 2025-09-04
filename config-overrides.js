const path = require("path");

module.exports = {
  webpack: function override(config) {
    // Alias @ -> src
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },

  jest: (config) => {
    // Use jsdom environment
    config.testEnvironment = "jsdom";

    // Setup jest-dom and other setup files
    config.setupFilesAfterEnv = ["<rootDir>/src/tests/react/setupTests.js"];

    // Only look for tests in /src/tests/react/ (outside src)
    config.testMatch = ["<rootDir>/src/tests/react/**/*.(test|spec).{js,jsx,ts,tsx}"];

    // Mock CSS/SCSS and support @ alias
    config.moduleNameMapper = {
      "\\.(css|scss|sass)$": "identity-obj-proxy",
      "^@/(.*)$": "<rootDir>/src/$1"
    };

    // Disable CRA watch plugins filtering to ensure external tests are detected
    config.watchPlugins = [];

    return config;
  }
};
