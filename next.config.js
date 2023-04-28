/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const { i18n } = require('./next-i18next.config');
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = {
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
  }
}

module.exports = withTranslateRoutes({
  images: {
    domains: ['debmedia.com', 'blog.debmedia.com', 'secure.gravatar.com'],
  },
  webpack: nextConfig.webpack,
  i18n,
})