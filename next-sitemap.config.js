/** @type {import('next-sitemap').IConfig} */
const path = require('path');
const { translateUrl } = require('next-translate-routes');
const { createNtrData } = require('next-translate-routes/plugin');

const nextConfig = require('./next.config');
const i18NextConfig = require('./next-i18next.config');

const data = createNtrData(
  nextConfig,
  path.resolve(process.cwd(), './pages')
);

global.__NEXT_TRANSLATE_ROUTES_DATA = data;

module.exports = {
  siteUrl: process.env.URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
  transform: async (config, path) => {
    const locale =
      i18NextConfig.i18n.locales.find(
        (locale) => path.indexOf(`/${locale}/`) > -1
      ) || i18NextConfig.i18n.defaultLocale;
    return {
      loc: translateUrl(path, locale), // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};