/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const { i18n } = require('./next-i18next.config');

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

module.exports = {
  images: {
    domains: ['debmedia.com'],
  },
  webpack: nextConfig.webpack,
  i18n,
  async redirects() {
    return [
      {
        source: '/blog/:path',
        destination: 'https://blog.debmedia.com/:path',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://blog.debmedia.com',
        permanent: true,
      },
    ]
  },
}