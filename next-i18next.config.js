module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt', 'en'],
    reloadOnPrerender: true,//sacar en producción
    debug: true, // sacar en producción
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b', 'span']
      }
    
  },
};