module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt', 'fr', 'en'],
    reloadOnPrerender: true,//sacar en producción
    debug: true, // sacar en producción
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b', 'span']
      }
    
  },
};