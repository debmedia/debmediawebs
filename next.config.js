/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const { i18n } = require('./next-i18next.config');
const withTranslateRoutes = require('next-translate-routes/plugin')
const { withPlaiceholder } = require("@plaiceholder/next");

let nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }));
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
    return config;
  },
  images: {
    domains: ['debmedia.com', 'blog.debmedia.com', 'secure.gravatar.com'],
  },
  i18n
}

nextConfig = withTranslateRoutes(nextConfig);
nextConfig = withPlaiceholder(nextConfig);
module.exports = nextConfig;