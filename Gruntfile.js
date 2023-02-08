
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
        src: "public/locales/es/*.json",
      },
    },
    CSVToTranslations:{
      target: {
        src: "scripts/in/traducciones.csv",
        dest: "public/locales/",
        options: {
          columns: ["key", "es", "pt", "en"],
          dirs: ["pt", "en"]
        }
      },
    }
  });

  grunt.loadTasks('scripts/');
};