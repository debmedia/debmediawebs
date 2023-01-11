/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }));
    return config;
  }
}

module.exports = {
  images: {
    domains: ['debmedia.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.debmedia.com/:path*',
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