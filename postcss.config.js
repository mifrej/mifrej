/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')({
          /* custom options */
        }),
      ],
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      importFrom: 'src/variables.css',
      stage: 0,
    }),
    require('postcss-reporter')({ clearReportedMessages: true }),
  ],
};
