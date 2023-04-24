/** @type {import('next-sitemap').IConfig} */
const path = require("path");
const { translateUrl } = require("next-translate-routes");
const { createNtrData } = require("next-translate-routes/plugin");

const nextConfig = require("./next.config");
const i18NextConfig = require("./next-i18next.config");

const data = createNtrData(nextConfig, path.resolve(process.cwd(), "./pages"));

global.__NEXT_TRANSLATE_ROUTES_DATA = data;

module.exports = {
    siteUrl: process.env.URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.URL}/blog/sitemap.xml`,
        ],
    },
    exclude: ["/404", "/*/404", "/blog/sitemap.xml"],
    // aca hacemos las transformaciones para tener las urls traducidas en el sitemap
    transform: async (config, path) => {
        const locale =
            i18NextConfig.i18n.locales.find(
                (locale) => path.indexOf(`/${locale}/`) > -1
            ) || i18NextConfig.i18n.defaultLocale;
        const alternateRefs = i18NextConfig.i18n.locales.map((locale) => {
            return {
                href: process.env.URL + translateUrl(path, locale),
                hreflang: locale,
                hrefIsAbsolute: true,
            };
        });
        return {
            loc: translateUrl(path, locale),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: alternateRefs ?? [],
        };
    },
};