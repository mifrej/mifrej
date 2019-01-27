module.exports = {
  extends: ["eslint-config-airbnb", "prettier"],
  env: {
    browser: true,
    jest: true,
  },
  parser: "babel-eslint",
  plugins: ["json", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["node_modules"],
          },
        },
      },
    },
  },
};
