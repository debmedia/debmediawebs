
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
                      "cookie": "S=apps-spreadsheets=QWcoKS7sI2xK-wIgy6YNm-td6VjpLUTzpwOAuL83zgg; COMPASS=apps-spreadsheets=CmUACWuJVymc7rdFRyvnYcDVJNKzM2zqph5WfB9dWTGLO-BDx6vy-6eD0bNty72Rc8oAljszgSTnilv0LP9JV-nJuOHxKfXWXRL_neG9mj_VjlqiIJz92q2EeRHYX_lE-U8w_aFEoBDa3o-jBhpnAAlriVc3sgp6evtzUKqIhjYpj1oerO5HrgYlXqr_wRpM-wus4GRuOf6XKQw2lYYbjX-DH3kaAhx3oWU4gXXT3wFuRtG8Rc27CLXi_vnIA83yvNOMSXyDUptksixv9eEux71Q7DXvlg==; OTZ=6996666_68_68__68_; SID=WAjW0Sh_mvmEhHrdFmulgtl6tvn7iDW7a4zcwe2HhLCOSXIo8jlQbA0bc_2RC1LP46mqAA.; __Secure-1PSID=WAjW0Sh_mvmEhHrdFmulgtl6tvn7iDW7a4zcwe2HhLCOSXIoeUUNbgwmNxU-b74cY35Q0A.; __Secure-3PSID=WAjW0Sh_mvmEhHrdFmulgtl6tvn7iDW7a4zcwe2HhLCOSXIoR0KA4uwkr-1fs_yYnjakAw.; HSID=Ayw8nrCR79vzNEvTl; SSID=AoaRaTLLN0BywN2LB; APISID=duOAHVNk7pPJFOzW/AkBZg8Rd_Jn2_gI2n; SAPISID=Ne-iaGiZr-uw_we6/AmeBM9s1ZRnQjkuS4; __Secure-1PAPISID=Ne-iaGiZr-uw_we6/AmeBM9s1ZRnQjkuS4; __Secure-3PAPISID=Ne-iaGiZr-uw_we6/AmeBM9s1ZRnQjkuS4; AEC=AUEFqZfEQ4l8sDD1aw6Kh1bZG7ERKipeZ9Oft3UrFfqnY6cWTYMA3xYNLU8; NID=511=HfbOZhVefW0zy4cnZJKMlWcxoKKY7CrTb-r8fsb_RGQnc-Jqfm95KAhQaC67l_eJZj7_Ipcrb6tfcjv_6YemOVLQqVKMYtk34wDBkGEmxrCP8DjK-XJfiHyyAmALNGgmj7RvWHOT2xsa3uWZnpnY3elWvgEoi7zI6lZ9p3vDsYeQyVf_Oo7BitzG1QTjxmCSsrXO9UZcZlleRYLSBqFJ2-LkATYuGAJkRobXjUlEpPOlakTrozDCU8J9YaVSQb0teG4Zju2GuhWoiODf2DW7_tABAFOBSkT3qXsx1K5dOQ; 1P_JAR=2023-05-16-19; SIDCC=AP8dLtwLeVsn6DDNI_dme_vQc2keG6g5D9AkR6DKwdPFhqS8TyKz8-2RGUx4WFvQtU20P51EBdG1; __Secure-1PSIDCC=AP8dLtwdOGOW3IIttpZfbCFu8ruJxHNlqgYhMLLuHYFLrtiGaH5N1BPtcIWP0QREso1lFNoLxn1J; __Secure-3PSIDCC=AP8dLtzoELzmEpkJj6iF8QkIuyrGQ8CNXsSp1WG4ee1x7nGqfZrj4N1ioWj73K_NW0nhcYAaNbQ",
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
                "cookie": "S=apps-spreadsheets=QWcoKS7sI2xK-wIgy6YNm-td6VjpLUTzpwOAuL83zgg; COMPASS=apps-spreadsheets=CmUACWuJVymc7rdFRyvnYcDVJNKzM2zqph5WfB9dWTGLO-BDx6vy-6eD0bNty72Rc8oAljszgSTnilv0LP9JV-nJuOHxKfXWXRL_neG9mj_VjlqiIJz92q2EeRHYX_lE-U8w_aFEoBDa3o-jBhpnAAlriVc3sgp6evtzUKqIhjYpj1oerO5HrgYlXqr_wRpM-wus4GRuOf6XKQw2lYYbjX-DH3kaAhx3oWU4gXXT3wFuRtG8Rc27CLXi_vnIA83yvNOMSXyDUptksixv9eEux71Q7DXvlg==; OTZ=6996666_68_68__68_; SID=WAjW0Sh_mvmEhHrdFmulgtl6tvn7iDW7a4zcwe2HhLCOSXIo8jlQbA0bc_2RC1LP46mqAA.; __Secure-1PSID=WAjW0Sh_mvmEhHrdFmulgtl6tvn7iDW7a4zcwe2HhLCOSXIoeUUNbgwmNxU-b74cY35Q0A.; __Secure-3PSID=WAjW0Sh_mvmEhHrdFmulgtl6tvn7iDW7a4zcwe2HhLCOSXIoR0KA4uwkr-1fs_yYnjakAw.; HSID=Ayw8nrCR79vzNEvTl; SSID=AoaRaTLLN0BywN2LB; APISID=duOAHVNk7pPJFOzW/AkBZg8Rd_Jn2_gI2n; SAPISID=Ne-iaGiZr-uw_we6/AmeBM9s1ZRnQjkuS4; __Secure-1PAPISID=Ne-iaGiZr-uw_we6/AmeBM9s1ZRnQjkuS4; __Secure-3PAPISID=Ne-iaGiZr-uw_we6/AmeBM9s1ZRnQjkuS4; AEC=AUEFqZfEQ4l8sDD1aw6Kh1bZG7ERKipeZ9Oft3UrFfqnY6cWTYMA3xYNLU8; NID=511=HfbOZhVefW0zy4cnZJKMlWcxoKKY7CrTb-r8fsb_RGQnc-Jqfm95KAhQaC67l_eJZj7_Ipcrb6tfcjv_6YemOVLQqVKMYtk34wDBkGEmxrCP8DjK-XJfiHyyAmALNGgmj7RvWHOT2xsa3uWZnpnY3elWvgEoi7zI6lZ9p3vDsYeQyVf_Oo7BitzG1QTjxmCSsrXO9UZcZlleRYLSBqFJ2-LkATYuGAJkRobXjUlEpPOlakTrozDCU8J9YaVSQb0teG4Zju2GuhWoiODf2DW7_tABAFOBSkT3qXsx1K5dOQ; 1P_JAR=2023-05-16-19; SIDCC=AP8dLtwhuEs1TWkQhjAuAI6uEBj4logRLRdHqQOe1Pte6-wGmpEYeaRmZc_EZj9LHN2PgEy6sc7q; __Secure-1PSIDCC=AP8dLtz8c6s69KraGcsn3j9ut21ADaQL997OmOAi3JRCexL-KG3Rn03x5BrW0kxW5nKjXjfzoSQw; __Secure-3PSIDCC=AP8dLtwTRGyWzBY3YGRklTkH5jVySOTUJZd0XtShy-0YP1AjkXCUxRj-M2PIi53E_YOLLdapWuQ",
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




