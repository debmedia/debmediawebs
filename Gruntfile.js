
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
                      "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiUocsBCK32zAEIjozNAQj7lc0BCKiWzQEI4ZfNAQjjl80BCMyYzQEI9JnNAQjS4awC",
                      "cookie": "S=apps-spreadsheets=1vbhIw6s8mkXd9VSQfZmZ0tOR-6ZgSnEk6tgJq1anpU; COMPASS=apps-spreadsheets=CmUACWuJVweKgKYXZp7waDhpe-JuSPBqq8K0CEp5Klozk44U_sDK6pW22AX3xeoy2B7zBQu_pZ-OiTXwesi__Kikunp6B8ZG5fRQy8z2nWhncI16gtLys0hJZEsssMEO9JlN7c7I_BCq9OygBhpnAAlriVd3Aq_j4trImRl-u95rNyXMBlNxxEeBfTAhZxq8xyZw9sKWKuwdaGxWT80LCjHurRqlFbsScdPpKpKyARNVwyR-FuI7Wy5HnrewlBQw1Assb9Y1xdweULVZcFMCAparTh-Xyg==; OTZ=6933033_68_68__68_; SID=UgjW0TumhlsVcXWcfpC-spF6tQIB8zEevHaWVwMd_owmZ7Mo90w6N9Fm3z15OzEs4cx4Nw.; __Secure-1PSID=UgjW0TumhlsVcXWcfpC-spF6tQIB8zEevHaWVwMd_owmZ7MoM3M2zUOdxSJ9W_1TOLJVcg.; __Secure-3PSID=UgjW0TumhlsVcXWcfpC-spF6tQIB8zEevHaWVwMd_owmZ7MolET5N3vkpuVZkcAPEGlC4w.; HSID=Aq02zkRZXIGUV08Pr; SSID=AaxABgl86ALXavr5X; APISID=ApiYRB4urkSkNGgn/AS3-KNyYgPIWGVCHh; SAPISID=VU0tjCNrYJyfx7m5/ATVNtZUJLUzeRVon6; __Secure-1PAPISID=VU0tjCNrYJyfx7m5/ATVNtZUJLUzeRVon6; __Secure-3PAPISID=VU0tjCNrYJyfx7m5/ATVNtZUJLUzeRVon6; AEC=ARSKqsIWin4iQntAHgt7eLcdVysTY7uu-lvgD1DOSub5C_3z6ZKJ-cPudQ; NID=511=fVl6WcRxjF-BU7dTzUZsy9hgBuELJsmpl-z1EJbeDkMBVZlJAuh_MFfmEABOSIfot_CNQVRxiThlGAB-f1Ov_RWYLTImot4JeY3gluNUjHI4SGekhzNvyFMj12CsahOaoy6YfBkxmZ-74eLb68jWE0_VGWeCS18B1nDhHx2V9_t2qn7qA-yCyI9zC8jqkEvJvIn10Snotr6_pKnn6G7I2nDt_NhDRJJTwagp2-yX_SDgWc2wumuyNgX8A7gaBjHPUDBIIvXWhLeApNKa6MYWnNgz0zlomA5VPU2EOZ4hageH9g; 1P_JAR=2023-03-22-16; SIDCC=AFvIBn_DqInzrEm3czgrWPfJEGVOhlCWCrPAMgHDNOBLSMBOkjFbQ5TT6X7jrSxyJwBsuoKZrBof; __Secure-1PSIDCC=AFvIBn9m6FgVBOF9kFNBCxDvFOsx7m8d1dVFmhvarpeJ0xycrLbuTIbzp1XhsMNg0WC2oRm2VIqt; __Secure-3PSIDCC=AFvIBn-3OkMYZhTJ7Cpe0VM7wn7-_0hTl8vm8DGIlF5Iel_1G6Qck6o9qPder1ca8vBOb6kYB0c",
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
                "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiUocsBCK32zAEIjozNAQj7lc0BCKiWzQEI4ZfNAQjjl80BCMyYzQEI9JnNAQjS4awC",
                "cookie": "S=apps-spreadsheets=1vbhIw6s8mkXd9VSQfZmZ0tOR-6ZgSnEk6tgJq1anpU; COMPASS=apps-spreadsheets=CmUACWuJVweKgKYXZp7waDhpe-JuSPBqq8K0CEp5Klozk44U_sDK6pW22AX3xeoy2B7zBQu_pZ-OiTXwesi__Kikunp6B8ZG5fRQy8z2nWhncI16gtLys0hJZEsssMEO9JlN7c7I_BCq9OygBhpnAAlriVd3Aq_j4trImRl-u95rNyXMBlNxxEeBfTAhZxq8xyZw9sKWKuwdaGxWT80LCjHurRqlFbsScdPpKpKyARNVwyR-FuI7Wy5HnrewlBQw1Assb9Y1xdweULVZcFMCAparTh-Xyg==; OTZ=6933033_68_68__68_; SID=UgjW0TumhlsVcXWcfpC-spF6tQIB8zEevHaWVwMd_owmZ7Mo90w6N9Fm3z15OzEs4cx4Nw.; __Secure-1PSID=UgjW0TumhlsVcXWcfpC-spF6tQIB8zEevHaWVwMd_owmZ7MoM3M2zUOdxSJ9W_1TOLJVcg.; __Secure-3PSID=UgjW0TumhlsVcXWcfpC-spF6tQIB8zEevHaWVwMd_owmZ7MolET5N3vkpuVZkcAPEGlC4w.; HSID=Aq02zkRZXIGUV08Pr; SSID=AaxABgl86ALXavr5X; APISID=ApiYRB4urkSkNGgn/AS3-KNyYgPIWGVCHh; SAPISID=VU0tjCNrYJyfx7m5/ATVNtZUJLUzeRVon6; __Secure-1PAPISID=VU0tjCNrYJyfx7m5/ATVNtZUJLUzeRVon6; __Secure-3PAPISID=VU0tjCNrYJyfx7m5/ATVNtZUJLUzeRVon6; AEC=ARSKqsIWin4iQntAHgt7eLcdVysTY7uu-lvgD1DOSub5C_3z6ZKJ-cPudQ; NID=511=fVl6WcRxjF-BU7dTzUZsy9hgBuELJsmpl-z1EJbeDkMBVZlJAuh_MFfmEABOSIfot_CNQVRxiThlGAB-f1Ov_RWYLTImot4JeY3gluNUjHI4SGekhzNvyFMj12CsahOaoy6YfBkxmZ-74eLb68jWE0_VGWeCS18B1nDhHx2V9_t2qn7qA-yCyI9zC8jqkEvJvIn10Snotr6_pKnn6G7I2nDt_NhDRJJTwagp2-yX_SDgWc2wumuyNgX8A7gaBjHPUDBIIvXWhLeApNKa6MYWnNgz0zlomA5VPU2EOZ4hageH9g; 1P_JAR=2023-03-22-16; SIDCC=AFvIBn_vdnBFaJbrBC4dYj69Gtmi3WdvTP0BWpx2yckdUcihU3tZYQub-IOxbO_Bz4sSqqoynVvk; __Secure-1PSIDCC=AFvIBn8uzITVIoLFTnEA2aIZmFNKc6LUAG3UEN5afQ5srl7TRqK1pw34Rg_lwym-PMKfyn3hA9f_; __Secure-3PSIDCC=AFvIBn_LeEbP0T5z1ByYhgyela-iGjZE6tuyPQVHPbmEiaGGMZHP9Ptn9T66mzdi9Bq3cNJqZ4s",
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




