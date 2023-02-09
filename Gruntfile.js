
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
      generalTranslations: {
        src: "scripts/in/traducciones.csv",
        dest: "public/locales/",
        options: {
          columns: ["key", "es", "pt", "en"],
          dirs: ["pt", "en"]
        }
      },
    },
    JSONsToCSV: {
      target: {
        // src: "json/Review.json",
        // dest: "scripts/out/Review.csv",
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'json/',      // Src matches are relative to this path.
            src: [
              "Review.json",
              "services-banca.json",
              "services-gob.json",
              "services-retail.json",
              "services-salud.json",
              "services-telcos.json",
              "services-utilities.json",
              "Services.json",
              "setps-citas.json",
              "setps-debq.json",
              "setps-debsign.json",
              "setps-encuestas.json",
              "setps-mobile.json",
              "setps-partners.json",
              "solutions-home.json",
            ], // Actual pattern(s) to match.
            dest: 'scripts/out/jsoncsv/',   // Destination path prefix.
            ext: '.csv',   // Dest filepaths will have this extension.
            //extDot: 'first'   // Extensions in filenames begin after the first dot
          },
        ],
        options: {
          topLevelKeys: ["es", "pt", "en"],
          header: ["key","es", "pt", "en"]
        }
      }
    },
    concat: {
      concatCSVsFormJsons:{
            src: "scripts/out/jsoncsv/**.csv",
            dest: 'scripts/out/todo.csv',   // Destination path prefix.
        options: {
          separator: "\n"
        }
      }
    },
    CSVToJson: {
      jsons: {
        options: {
          columns: ["key", "es", "pt", "en"],
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'scripts/out/jsoncsv/',      // Src matches are relative to this path.
            src: "**.csv", // Actual pattern(s) to match.
            dest: './scripts/out/csvjson/',   // Destination path prefix.
            ext: '.json',   // Dest filepaths will have this extension.
          },
        ],
      },
    }
  });

  grunt.loadTasks('scripts/');
  grunt.loadNpmTasks('grunt-contrib-concat');
};





