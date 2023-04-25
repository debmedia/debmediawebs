
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
                      "cookie": "S=apps-spreadsheets=lBnnE2jjvmtBN8XZSd6ZdhkkYjsl1lUmMzusGupWw6I; COMPASS=apps-spreadsheets=CmUACWuJVxJU6BHJM-Ak46rm4sfH7dk443yOjv-aEU_2LfBxfTF-QSbQN_XspF0rs2oo7Lxja83Pv_npO_RlAUIZ1n8P7qXf6SGfqKC09wqWF6HBvl5vv469uXq_suvtiBAYcrISqhCE14uiBhpnAAlriVeQgo_c8lg3N6UhXWDHg0FVPd1fb2yHQ18rzjQGPVH25U3pLnve5wUpQrI6hgG7x3LYnUI0qC0DG8-A_j-dnzCv8D2mqxE7aPV-pL5vgU5XWNTb65puPurPOB5w6ln-ManRqA==; SID=VgjW0aL6o9tYJUJOxBPNAfRXNoBNKAzqoN_S3AgKf7az7o2JjTlkJNRNMsQk1uW3mV1CCw.; __Secure-1PSID=VgjW0aL6o9tYJUJOxBPNAfRXNoBNKAzqoN_S3AgKf7az7o2JpMkUQGOl3oQLf2ZgS5yquw.; __Secure-3PSID=VgjW0aL6o9tYJUJOxBPNAfRXNoBNKAzqoN_S3AgKf7az7o2J_vb3akcrKZ-CcvQdt1-Nxw.; HSID=ATEo4LAUcyiaYsbXO; SSID=AatDJlI5Pk46kzAN5; APISID=nZzjA-nxA3xDM8Z2/AIF40IqFUUBAJXdAc; SAPISID=cWnDCLVmrG6xHSCB/AzYQsqZtoK_2sfBZb; __Secure-1PAPISID=cWnDCLVmrG6xHSCB/AzYQsqZtoK_2sfBZb; __Secure-3PAPISID=cWnDCLVmrG6xHSCB/AzYQsqZtoK_2sfBZb; AEC=AUEFqZdIx8wvMnBMmFxo5KYPVuJN8uhXaZVrYrfrJCydFzgt4dQmzdkbrg; NID=511=VcPuNXN_vk0IhiYSoKx5k0In1JOwkVlKmB0EQUmoL4gkgosOk9VHV5v936-ON7m5716TYVj_JEb5y-uJeZxm3L0cGNFezUL3zYuwDkStRys3PhDKixXCG8dnftLHz4fAEhza3w50SzZu5eu0e1QeVbfRmaO7gmvoHC0R2oaSxG75Eq2qZZCUK8A0CCGyiRuI3oSbU_SmDO96aJFcwL066ndWRyHRfSd6gaEHIveJzrj5Qg1O_M39JaN637Z_eiBrfUo37Y_MUucxy-ZY7uuEb0n--f1lvVlRTvXejdbIiw; 1P_JAR=2023-4-21-18; SIDCC=AP8dLtzLUkgJnvGc6sHT2_1_YYEezXDX5Zaoo48VrcuCdmA6d7FSJVrPWpZXyLJ6ijHnmH4DQDbw; __Secure-1PSIDCC=AP8dLtzVXwPoZHJDP8-uekkD3yhBVk206liEekARoUvw-vOFQNnTv2HX3WCf7inQPSHzwW8n3Q8Y; __Secure-3PSIDCC=AP8dLtzLezTMJ47ObPv3yIyE8WB0wxVvh8mxURBFPapK3Nmvr4j2C1DLDnn7bgkK09lic3t3TkA",
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
                "cookie": "S=apps-spreadsheets=lBnnE2jjvmtBN8XZSd6ZdhkkYjsl1lUmMzusGupWw6I; COMPASS=apps-spreadsheets=CmUACWuJVxJU6BHJM-Ak46rm4sfH7dk443yOjv-aEU_2LfBxfTF-QSbQN_XspF0rs2oo7Lxja83Pv_npO_RlAUIZ1n8P7qXf6SGfqKC09wqWF6HBvl5vv469uXq_suvtiBAYcrISqhCE14uiBhpnAAlriVeQgo_c8lg3N6UhXWDHg0FVPd1fb2yHQ18rzjQGPVH25U3pLnve5wUpQrI6hgG7x3LYnUI0qC0DG8-A_j-dnzCv8D2mqxE7aPV-pL5vgU5XWNTb65puPurPOB5w6ln-ManRqA==; SID=VgjW0aL6o9tYJUJOxBPNAfRXNoBNKAzqoN_S3AgKf7az7o2JjTlkJNRNMsQk1uW3mV1CCw.; __Secure-1PSID=VgjW0aL6o9tYJUJOxBPNAfRXNoBNKAzqoN_S3AgKf7az7o2JpMkUQGOl3oQLf2ZgS5yquw.; __Secure-3PSID=VgjW0aL6o9tYJUJOxBPNAfRXNoBNKAzqoN_S3AgKf7az7o2J_vb3akcrKZ-CcvQdt1-Nxw.; HSID=ATEo4LAUcyiaYsbXO; SSID=AatDJlI5Pk46kzAN5; APISID=nZzjA-nxA3xDM8Z2/AIF40IqFUUBAJXdAc; SAPISID=cWnDCLVmrG6xHSCB/AzYQsqZtoK_2sfBZb; __Secure-1PAPISID=cWnDCLVmrG6xHSCB/AzYQsqZtoK_2sfBZb; __Secure-3PAPISID=cWnDCLVmrG6xHSCB/AzYQsqZtoK_2sfBZb; AEC=AUEFqZdIx8wvMnBMmFxo5KYPVuJN8uhXaZVrYrfrJCydFzgt4dQmzdkbrg; NID=511=VcPuNXN_vk0IhiYSoKx5k0In1JOwkVlKmB0EQUmoL4gkgosOk9VHV5v936-ON7m5716TYVj_JEb5y-uJeZxm3L0cGNFezUL3zYuwDkStRys3PhDKixXCG8dnftLHz4fAEhza3w50SzZu5eu0e1QeVbfRmaO7gmvoHC0R2oaSxG75Eq2qZZCUK8A0CCGyiRuI3oSbU_SmDO96aJFcwL066ndWRyHRfSd6gaEHIveJzrj5Qg1O_M39JaN637Z_eiBrfUo37Y_MUucxy-ZY7uuEb0n--f1lvVlRTvXejdbIiw; 1P_JAR=2023-4-21-18; SIDCC=AP8dLtzpxk98CqOfwBIe2OZt93mxJYeNRuefiQMhImmpbZntyP-3AENgngfti1oOjTYUtv6DU9LD; __Secure-1PSIDCC=AP8dLtzgY0LGbwjjCB9O7T3CmHmEJbMqDMS8I6jQsJEH4Sx02aLskmW_kjQMw2Io4DaxLbH8WQRY; __Secure-3PSIDCC=AP8dLtwjWMqvornkm_ppcg8OEmQ1u4xZ80OUwnNpsU0M1NfYmrUL3IAiHb55NM23e8GW8yPWUYI",
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




