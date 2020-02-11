const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withCSS, withBundleAnalyzer], {});
