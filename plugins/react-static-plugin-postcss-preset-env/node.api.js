import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import postcssPresetEnv from 'postcss-preset-env';

const { resolve } = require('path');

export default (options = {}) => ({
  webpack: (config, { stage }) => {
    let loaders = [];

    const styleLoader = {
      loader: 'style-loader',
      options: {
        sourceMap: true,
      },
    };

    const cssLoader = {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
      },
    };

    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        config: { path: resolve() },
        sourceMap: true,
      },
    };

    if (stage === 'dev') {
      // Dev
      loaders = [styleLoader, cssLoader, postcssLoader];
    } else if (stage === 'node') {
      loaders = [cssLoader, postcssLoader];
    } else {
      // Prod
      loaders = [ExtractCssChunks.loader, cssLoader, postcssLoader];
    }

    config.module.rules[0].oneOf.unshift({
      test: /\.css$/,
      use: loaders,
    });
    return config;
  },
});
