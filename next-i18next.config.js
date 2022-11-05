module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt'],
    reloadOnPrerender: true,//sacar en producción
    options: {
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b']
      }
    }
  },
};