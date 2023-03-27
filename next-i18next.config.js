module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt'],
    reloadOnPrerender: process.env.NODE_ENV === "development",
    debug: process.env.NODE_ENV === "development",
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b', 'span']
      }
    
  },
};