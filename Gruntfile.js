
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    translationsToCSV: {
      target: {
        baseInputFiles: "public/locales/es/",
        compareInputFiles: ["public/locales/pt/"], 
        outputFile: "scripts/out/traducciones.csv",
        header: "Key, Español, Portugués, Inglés"
      },
    },
    cleanTranslations: {
      target: {
        baseInputFiles: "public/locales/es/",
      },
    },
    formatTranslations: {
      target: {
        baseInputFiles: "public/locales/es/",
      },
    }
  });

  grunt.loadTasks('scripts/');
};