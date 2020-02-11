// eslint-disable-next-line @typescript-eslint/no-var-requires
const imports = require('./src/theme/imports');

module.exports = {
  plugins: {
    'postcss-normalize': {},
    'postcss-preset-env': {
      importFrom: imports,
      preserve: false,
      stage: 1,
    },
  },
};
