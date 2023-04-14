
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      translationsToCSV: {
          target: {
              baseInputFiles: "public/locales/es/",
              compareInputFiles: ["public/locales/pt/", "public/locales/en/"],
              outputFile: "scripts/out/traducciones.csv",
              header: "Key, Español, Portugués, Inglés",
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
      CSVToTranslations: {
          generalTranslations: {
              src: "scripts/in/traducciones.csv",
              dest: "public/locales/",
              options: {
                  columns: ["key", "es", "pt", "en"],
                  dirs: ["es", "pt", "en"],
              },
          },
      },
      JSONsToCSV: {
          target: {
              // src: "json/Review.json",
              // dest: "scripts/out/Review.csv",
              files: [
                  {
                      expand: true, // Enable dynamic expansion.
                      cwd: "json/", // Src matches are relative to this path.
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
                      dest: "scripts/out/jsoncsv/", // Destination path prefix.
                      ext: ".csv", // Dest filepaths will have this extension.
                      //extDot: 'first'   // Extensions in filenames begin after the first dot
                  },
              ],
              options: {
                  topLevelKeys: ["es", "pt", "en"],
                  header: ["key", "es", "pt", "en"],
              },
          },
      },
      concat: {
          concatCSVsFormJsons: {
              src: "scripts/out/jsoncsv/**.csv",
              dest: "scripts/out/content.csv", // Destination path prefix.
              options: {
                  separator: "\n",
              },
          },
      },
      CSVToJson: {
          jsons: {
              options: {
                  columns: ["key", "es", "pt", "en"],
              },
              files: [
                  {
                      expand: true, // Enable dynamic expansion.
                      cwd: "scripts/out/splitted/", // Src matches are relative to this path.
                      src: "**.csv", // Actual pattern(s) to match.
                      dest: "json/", // Destination path prefix.
                      ext: ".json", // Dest filepaths will have this extension.
                  },
              ],
          },
      },
      splitCSV: {
          target: {
              src: "scripts/in/content.csv",
              dest: "scripts/out/splitted/",
              options: {
                  header: ["key", "es", "pt", "en"],
              },
          },
      },
      clean: {
        import: ["scripts/in/*", "scripts/out/*"]
      },
      http: {
        // Para bajar los csv de google sheets ir a la hoja correspondiente
        // abrir los devtools, hacer exportar csv, buscar el request que tiene export?...
        // copiar URL y header aca abajo
          translationsCsv: {
              dest: "scripts/in/traducciones.csv",
              options: {
                  url: "https://docs.google.com/spreadsheets/d/1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk/export?format=csv&id=1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk&gid=1098190764",
                  headers: {
                      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                      "cache-control": "no-cache",
                      pragma: "no-cache",
                      "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiVocsBCMqTzQEI4ZfNAQjjl80BCOmbzQEI7J7NAQiHoM0BCNKizQE=",
                      "cookie": "S=apps-spreadsheets=Tcf6jZ0G3g0N-vueEZfuLGJTLLVyy2nnGmKmY73xYFA; COMPASS=apps-spreadsheets=CmUACWuJV2RWLtqUJem16EjQNwfr4iVY2M6uotqMy8050YXv_H3LSsiQraZqJkPPnsMc4oqnAaNYLNUKdVaiDMvBYEHJoH76PuIJXl8ZV9Hq_UHfe_hvErT03vb3elT26Zvf7Q7HmhCKgdKhBhpnAAlriVcTlxVmlFLeGIr95dHP8wZJF8iB2KxP87Qy8xmygnE2eKcY_LowEL2LLm2254e3syqeFECXsF417WdF12bDGhmvfrQGNrlI5bAz7JkV2lyFgHKK2ozB6cVlA-pMqbjDXizFNA==; SID=VAjW0XxfoWgOGeuq9PV5KVVtbPDWojLGgbuRFkZR1jhLkM0upFyvDssvPMSgUD0X-W2XeA.; __Secure-1PSID=VAjW0XxfoWgOGeuq9PV5KVVtbPDWojLGgbuRFkZR1jhLkM0uY6kPf5p5JgmBD-FkX02uqw.; __Secure-3PSID=VAjW0XxfoWgOGeuq9PV5KVVtbPDWojLGgbuRFkZR1jhLkM0uBlayXo_8OY078XzoBZf9Zg.; HSID=ANjKDkjPjzZ1F2Kgb; SSID=AydUKnHVgyOEvJwIA; APISID=oQJgLf8UGi7Aoprs/AO0U6Mzea4qTcXRNK; SAPISID=zTKiG7b4dD1RYXY9/AdVxTeTbX1LRJAGMu; __Secure-1PAPISID=zTKiG7b4dD1RYXY9/AdVxTeTbX1LRJAGMu; __Secure-3PAPISID=zTKiG7b4dD1RYXY9/AdVxTeTbX1LRJAGMu; AEC=AUEFqZeWFq_lVXHXmyiGN3qCyzvmiC7aGyyrjW_Ly5XHi15O-p17SgL0Rg; NID=511=lZ-dHfwOMVForNJaJA2CkZG-FFKmUtLSaQCg3wJeKf8PjN50bSQ9DIXMHUp29LGxyNbIFA0MhZKDG4-m8bD2MklphTYH0EVHGA7309EEZwYwrFbm4mTisHb9yYJhwQ8dlCHeG1ZdaiTdyaQ5zMGn1b1moQBMn__v-vkjH6Rk8B587rcs29UuaKcKyxsSpTCbzrTv0cvvMTJ3XyWr3hG3uQ-oIFKoTto_YdaVb7LNDrN1-EGC6ojPOYoYeWrs4DTu96I12ymBDgOWnK5LdgIswZ-0HV9Kfd67VzqGVXbI; 1P_JAR=2023-04-10-20; SIDCC=AFvIBn_5RjmjOACp1l3vSDZnRt1DErRjBbnnTS2K1kjSDo485L60KKdrlltdJOFcklGWDRrD8vLv; __Secure-1PSIDCC=AFvIBn8JODe7eydRgb_g7AggY2pAj-l5YMcORmKIYl4klIrhq8jDs7zRDjamU3gz-TS2_CCc5akb; __Secure-3PSIDCC=AFvIBn-FA5O9X-5VQjwfcRiUGQ-hAMdfT5DlR6uW0dIqPSU662YJvKulqW0qP5bDgTYODfJy8wE",
                  },
                //   followRedirect: false,
                //   callback: (error, response, body) => {
                //     if(response.statusCode !==200) grunt.fail.warn("File Fetching Failed with code: " + response.statusCode);
                //   }
              },
          },
          contentCsv: {
            dest: "scripts/in/content.csv",
            options: {
              url: "https://docs.google.com/spreadsheets/d/1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk/export?format=csv&id=1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk&gid=1985613033",
              headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiVocsBCMqTzQEI4ZfNAQjjl80BCOmbzQEI7J7NAQiHoM0BCNKizQE=",
                "cookie": "S=apps-spreadsheets=Tcf6jZ0G3g0N-vueEZfuLGJTLLVyy2nnGmKmY73xYFA; COMPASS=apps-spreadsheets=CmUACWuJV2RWLtqUJem16EjQNwfr4iVY2M6uotqMy8050YXv_H3LSsiQraZqJkPPnsMc4oqnAaNYLNUKdVaiDMvBYEHJoH76PuIJXl8ZV9Hq_UHfe_hvErT03vb3elT26Zvf7Q7HmhCKgdKhBhpnAAlriVcTlxVmlFLeGIr95dHP8wZJF8iB2KxP87Qy8xmygnE2eKcY_LowEL2LLm2254e3syqeFECXsF417WdF12bDGhmvfrQGNrlI5bAz7JkV2lyFgHKK2ozB6cVlA-pMqbjDXizFNA==; SID=VAjW0XxfoWgOGeuq9PV5KVVtbPDWojLGgbuRFkZR1jhLkM0upFyvDssvPMSgUD0X-W2XeA.; __Secure-1PSID=VAjW0XxfoWgOGeuq9PV5KVVtbPDWojLGgbuRFkZR1jhLkM0uY6kPf5p5JgmBD-FkX02uqw.; __Secure-3PSID=VAjW0XxfoWgOGeuq9PV5KVVtbPDWojLGgbuRFkZR1jhLkM0uBlayXo_8OY078XzoBZf9Zg.; HSID=ANjKDkjPjzZ1F2Kgb; SSID=AydUKnHVgyOEvJwIA; APISID=oQJgLf8UGi7Aoprs/AO0U6Mzea4qTcXRNK; SAPISID=zTKiG7b4dD1RYXY9/AdVxTeTbX1LRJAGMu; __Secure-1PAPISID=zTKiG7b4dD1RYXY9/AdVxTeTbX1LRJAGMu; __Secure-3PAPISID=zTKiG7b4dD1RYXY9/AdVxTeTbX1LRJAGMu; AEC=AUEFqZeWFq_lVXHXmyiGN3qCyzvmiC7aGyyrjW_Ly5XHi15O-p17SgL0Rg; NID=511=lZ-dHfwOMVForNJaJA2CkZG-FFKmUtLSaQCg3wJeKf8PjN50bSQ9DIXMHUp29LGxyNbIFA0MhZKDG4-m8bD2MklphTYH0EVHGA7309EEZwYwrFbm4mTisHb9yYJhwQ8dlCHeG1ZdaiTdyaQ5zMGn1b1moQBMn__v-vkjH6Rk8B587rcs29UuaKcKyxsSpTCbzrTv0cvvMTJ3XyWr3hG3uQ-oIFKoTto_YdaVb7LNDrN1-EGC6ojPOYoYeWrs4DTu96I12ymBDgOWnK5LdgIswZ-0HV9Kfd67VzqGVXbI; 1P_JAR=2023-04-10-20; SIDCC=AFvIBn93Y23t2GypVZMSw0xYcYkLz7HCMZHs3sg6SHRGabC4n9w9vuUFWkKFIWVpllqEh5mwldx3; __Secure-1PSIDCC=AFvIBn8C_DB_R-GdhvNabB8s2PyYI9jEneAvrezJ1gneS_wBaJrtUerm8Dmi_xsVrcEzp5M4fr0N; __Secure-3PSIDCC=AFvIBn8AZY6yr8sBb42ROWHw3PJR1eEQKqbirabnAD0ocIAyNrdzVAwFhKob3Hy4tuKvMIvuagM",
              },
            //   followRedirect: false,
            //   callback: (error, response, body) => {
            //     if(response.statusCode !==200) grunt.fail.warn("File Fetching Failed with code: " + response.statusCode);
            //   }
            }
          }
      },

  });

  grunt.loadTasks('scripts/');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-http');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask("importCSVAsJSON", ["splitCSV", "CSVToJson"]);
  grunt.registerTask("exportJSONAsCSV", ["JSONsToCSV", "concat"]);
  grunt.registerTask("importAll", ["http", "CSVToTranslations", "importCSVAsJSON", "clean"]);
};




