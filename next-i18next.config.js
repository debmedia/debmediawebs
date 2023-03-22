module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt'],
    reloadOnPrerender: false, // Para producción tiene que ser false
    debug: false, // Para producción tiene que ser false
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b', 'span']
      }
    
  },
};