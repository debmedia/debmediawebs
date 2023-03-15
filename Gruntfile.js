
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
                  dirs: ["pt", "en"],
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
                      "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiUocsBCK32zAEIjozNAQj7lc0BCKiWzQEI4ZfNAQjjl80BCMyYzQEI9JnNAQjS4awC",
                      "cookie": "S=apps-spreadsheets=fL_sGZfHzZT6In6w7wzuKzJjLohXfgUGnujYsw-Im2k; COMPASS=apps-spreadsheets=CmUACWuJVybhr-5asP-AlTqjJzCjHd51jELpGVNIN7CIl7GNQCJWLpO3eod8hTyOGbraPKv7uqSbf_H51YzXQSzD-c6gHo8OrX-mlDB1nC4sutQ8NfBSSIVDfAURJnbBAnDUjo4GmRDlrsigBhpnAAlriVdiT5JEbRn5gD4O9JOZmhKT2iuaMN-pQ2Mmtbaqgs6h4ta4PSFVzbjYGroIi1aA1sQ_zX7vj8aXU9DqPB15IUjr-i5FAa_TxORy9emmRIbpj67OQAA1OmkCwP4MR0IQPB8QUg==; SID=TwjW0YO4WrUqMOwxOvx8S69RjxznXc_gV0KYMAliO2rCiFyP-l_QASb3Rl-Gi1_VgT5SgQ.; __Secure-1PSID=TwjW0YO4WrUqMOwxOvx8S69RjxznXc_gV0KYMAliO2rCiFyP_EDbgsZeBLBXEsvXxpHVmw.; __Secure-3PSID=TwjW0YO4WrUqMOwxOvx8S69RjxznXc_gV0KYMAliO2rCiFyPT18FF12fvHR9bdzzXneuPQ.; HSID=A7p3qlkYMVzLQuB_c; SSID=AWWmLBehHTxAJ_-A1; APISID=omxcly-OBXv4waYs/ACWW0YpxiSQErTGZ7; SAPISID=u4q5SA5CfgHC5awE/A2EHynjHmaPJAkYO9; __Secure-1PAPISID=u4q5SA5CfgHC5awE/A2EHynjHmaPJAkYO9; __Secure-3PAPISID=u4q5SA5CfgHC5awE/A2EHynjHmaPJAkYO9; OTZ=6933033_68_68__68_; AEC=ARSKqsKlpmioa4RXJlCmABWnYzHE1MOGHqZKozIFuwdIZlBinXRVmuT04w; 1P_JAR=2023-03-15-18; NID=511=d1J7E3OuOXwfxnrce355MaenU1vUhdHL7ljWpx6dAL4etEHuMRqu8oCgtU5dsbRT11tA2PtTBCHqIm9bjFLiL1KcNyHWNz762j2CM3DPb9EMG729lt65-pfuI9R_itTizPTL3aQXMi-nTPYUQvUOrhvVJ0HfZFcyGLkMhXtBkZV2cjJXNtBbkR3a6lU3gEvyA9ZQ9mFKv9tKXD4uVpwUEi6Juy-_HRaNGS70aGctIIvNW8SOXERI8L65Qb3ys55MSj5D33xlSPZ4xfpJHtFE388FHeMk5u83O9yokLXDtPMQXQ; SIDCC=AFvIBn_Ts71L5ATxLUWVWpCpABqN--OCSVLJJMOoN0Vb_NnYcoqEhKtYvUuirNAVY3xABWinOGuy; __Secure-1PSIDCC=AFvIBn9olPofMKChKv61lLy1ysjkuhqJ6Qqx9IfGZbCOv6LEnDoRPzwZQCSQHs995JztBOCggwey; __Secure-3PSIDCC=AFvIBn-j4lrc3pFsCpdnlbFvgA58-0TILr4vk-uuCnil5WnDTIHYIVKnNbpz2_-gdnsNNkE9jrY",
                  },
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
                "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiUocsBCK32zAEIjozNAQj7lc0BCKiWzQEI4ZfNAQjjl80BCMyYzQEI9JnNAQjS4awC",
                "cookie": "S=apps-spreadsheets=fL_sGZfHzZT6In6w7wzuKzJjLohXfgUGnujYsw-Im2k; COMPASS=apps-spreadsheets=CmUACWuJVybhr-5asP-AlTqjJzCjHd51jELpGVNIN7CIl7GNQCJWLpO3eod8hTyOGbraPKv7uqSbf_H51YzXQSzD-c6gHo8OrX-mlDB1nC4sutQ8NfBSSIVDfAURJnbBAnDUjo4GmRDlrsigBhpnAAlriVdiT5JEbRn5gD4O9JOZmhKT2iuaMN-pQ2Mmtbaqgs6h4ta4PSFVzbjYGroIi1aA1sQ_zX7vj8aXU9DqPB15IUjr-i5FAa_TxORy9emmRIbpj67OQAA1OmkCwP4MR0IQPB8QUg==; SID=TwjW0YO4WrUqMOwxOvx8S69RjxznXc_gV0KYMAliO2rCiFyP-l_QASb3Rl-Gi1_VgT5SgQ.; __Secure-1PSID=TwjW0YO4WrUqMOwxOvx8S69RjxznXc_gV0KYMAliO2rCiFyP_EDbgsZeBLBXEsvXxpHVmw.; __Secure-3PSID=TwjW0YO4WrUqMOwxOvx8S69RjxznXc_gV0KYMAliO2rCiFyPT18FF12fvHR9bdzzXneuPQ.; HSID=A7p3qlkYMVzLQuB_c; SSID=AWWmLBehHTxAJ_-A1; APISID=omxcly-OBXv4waYs/ACWW0YpxiSQErTGZ7; SAPISID=u4q5SA5CfgHC5awE/A2EHynjHmaPJAkYO9; __Secure-1PAPISID=u4q5SA5CfgHC5awE/A2EHynjHmaPJAkYO9; __Secure-3PAPISID=u4q5SA5CfgHC5awE/A2EHynjHmaPJAkYO9; OTZ=6933033_68_68__68_; AEC=ARSKqsKlpmioa4RXJlCmABWnYzHE1MOGHqZKozIFuwdIZlBinXRVmuT04w; 1P_JAR=2023-03-15-18; NID=511=d1J7E3OuOXwfxnrce355MaenU1vUhdHL7ljWpx6dAL4etEHuMRqu8oCgtU5dsbRT11tA2PtTBCHqIm9bjFLiL1KcNyHWNz762j2CM3DPb9EMG729lt65-pfuI9R_itTizPTL3aQXMi-nTPYUQvUOrhvVJ0HfZFcyGLkMhXtBkZV2cjJXNtBbkR3a6lU3gEvyA9ZQ9mFKv9tKXD4uVpwUEi6Juy-_HRaNGS70aGctIIvNW8SOXERI8L65Qb3ys55MSj5D33xlSPZ4xfpJHtFE388FHeMk5u83O9yokLXDtPMQXQ; SIDCC=AFvIBn-VrTRnnD8V90d_5bJcEtab4FaH6oaXCpDngnUuTr-kz56Pey55gbrO88r7jo2cudkDf7zP; __Secure-1PSIDCC=AFvIBn9i2E2ztxcjuY-dW0qvVl8CrVvrj0aix7uX-ROwvfTTEIPbNOL4c-P0uDMdJDodAcLmEOtK; __Secure-3PSIDCC=AFvIBn-BlTWi2pkO-yM33JDR1K00hQNl0ZSopiBpsV6OM5O86KfvOn8XRTyO3heoxKrytm7Q83w",
              },
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




