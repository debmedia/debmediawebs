module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt'],
    reloadOnPrerender: true, // Para producción tiene que ser false
    debug: true, // Para producción tiene que ser false
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b', 'span']
      }
    
  },
};