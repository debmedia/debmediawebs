
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      translationsToCSV: {
          target: {
              baseInputFiles: "public/locales/es/",
              compareInputFiles: ["public/locales/pt/"],
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
                      "accept-language":
                          "en-US,en;q=0.9,es-AR;q=0.8,es;q=0.7,pt;q=0.6",
                      "cache-control": "no-cache",
                      pragma: "no-cache",
                      "sec-ch-ua":
                          '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
                      "sec-ch-ua-arch": '"x86"',
                      "sec-ch-ua-bitness": '"64"',
                      "sec-ch-ua-full-version-list":
                          '"Chromium";v="110.0.5481.177", "Not A(Brand";v="24.0.0.0", "Google Chrome";v="110.0.5481.177"',
                      "sec-ch-ua-mobile": "?0",
                      "sec-ch-ua-model": '""',
                      "sec-ch-ua-platform": '"Linux"',
                      "sec-ch-ua-platform-version": '"5.19.0"',
                      "sec-ch-ua-wow64": "?0",
                      "sec-fetch-dest": "iframe",
                      "sec-fetch-mode": "navigate",
                      "sec-fetch-site": "same-origin",
                      "sec-fetch-user": "?1",
                      "upgrade-insecure-requests": "1",
                      "x-client-data":
                          "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiVocsBCK32zAEI/ovNAQiOjM0BCLmRzQEI+5XNAQinls0BCOGXzQEI45fNAQjMmM0BCPSZzQEI0uGsAg==",
                      cookie: "S=apps-spreadsheets=KfcnOAPM9uHtYNG38vRwBKTOZEbn5_q_nzrowngWvSw; COMPASS=apps-spreadsheets=CmUACWuJVyKlqwqKx4grsiofsosQ_T8hK4Hlt5M-r7wc1OSZEwnxG9jdCGrhbp1c5POnWKMk-iy90G5sIdOzvfSp_LhtFsfldHbJgc7VDgHLD7xikQHLBCP39_K5ho2d3lEn8pe6mhDlkp2gBhpnAAlriVetc-wpZYtNMKrDU5FfOIHzyTv0IObZ2YhxJcrqTqZLzvWVWfCXCOaYwzeE5-C5ybmpKYdu4v_ZWVAHO41JP6yQvBPJ9evFSoEa0bDXO4IaK4UTQ1LYPsU5WE6hPhMBqmRo1A==; SID=TwjW0U8OwFmuiRAmM_MgxbtQRtYabRQM3YVSe05TKic9NzGU5Cd8Gb7CGfIXge-bUWDhDQ.; __Secure-1PSID=TwjW0U8OwFmuiRAmM_MgxbtQRtYabRQM3YVSe05TKic9NzGUXD6b8Dt6DHovjcl2DdzJQg.; __Secure-3PSID=TwjW0U8OwFmuiRAmM_MgxbtQRtYabRQM3YVSe05TKic9NzGUDSXQvz6SIqEwahTasPoEgA.; HSID=Al-PyC3G7DpkClDnA; SSID=AIrF_JtsDhVdpuAOS; APISID=PhFWOMj1mAhG-Qu3/A2GJX6AIjv4nqQe14; SAPISID=dGMW4cbHhYO-sqjt/AQsJaSPA6mTLeISF8; __Secure-1PAPISID=dGMW4cbHhYO-sqjt/AQsJaSPA6mTLeISF8; __Secure-3PAPISID=dGMW4cbHhYO-sqjt/AQsJaSPA6mTLeISF8; AEC=ARSKqsIKGkeJZIGHZTzu6vEuZnlTActZZESh_7rK242N4gsd1xvzjAI66A; 1P_JAR=2023-03-07-12; NID=511=oz6NysC842Nfdzj9LTwUxJjaMpSPTprx17dHxA8oHiww_bgw-jjU6colH94MekRoGcYGD3tzkNVUQPw5NjLrIjrFtKr9RToO9JOV2y-kp9ka8NC6E_YMTMg0YfnNZxux6YZB1tB-koUA3vXHJeZz9nFqrb98Z22RAMthbb_jnVlgHHq6skF5mhRWiSsJNPtufNwtwDYUw6wfbXQjq8O-xy9DdRYEcaGjLfU5SIq3Fob3IbK6cpjLyTJ1ZylupkrrQG9aLwc4i4MXYYwsx3PaZitR1GiW5iGnaSi9tA0CfVkvKA; SIDCC=AFvIBn_vQxx7ygi3nzP7F0o0r_FGpitVQFxCy0zxIsDDDovgvnDCGY9yuMIudK2J2Q7lo7Psw2fP; __Secure-1PSIDCC=AFvIBn-wot_4cpuuA331go3ZqwV7YSJi5t2saMPFKoadc6-lewyIXm8kptVoEH97BCdUbL3mR0pb; __Secure-3PSIDCC=AFvIBn9rlz8PvrwwzqcGGSgY1HGnjIoNRSmWmU7Gx--JjFEXu_hC0nPmqCtHKKd3kWlTEFmu9ro",
                      Referer:
                          "https://docs.google.com/spreadsheets/d/1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk/edit",
                      "Referrer-Policy": "strict-origin-when-cross-origin",
                  },
              },
          },
          contentCsv: {
            dest: "scripts/in/content.csv",
            options: {
              url: "https://docs.google.com/spreadsheets/d/1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk/export?format=csv&id=1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk&gid=1985613033",
              headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9,es-AR;q=0.8,es;q=0.7,pt;q=0.6",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
                "sec-ch-ua-arch": "\"x86\"",
                "sec-ch-ua-bitness": "\"64\"",
                "sec-ch-ua-full-version-list": "\"Chromium\";v=\"110.0.5481.177\", \"Not A(Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"110.0.5481.177\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "\"\"",
                "sec-ch-ua-platform": "\"Linux\"",
                "sec-ch-ua-platform-version": "\"5.19.0\"",
                "sec-ch-ua-wow64": "?0",
                "sec-fetch-dest": "iframe",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "x-client-data": "CKG1yQEIjbbJAQiitskBCKmdygEIv/rKAQiVocsBCK32zAEI/ovNAQiOjM0BCLmRzQEI+5XNAQinls0BCOGXzQEI45fNAQjMmM0BCPSZzQEI0uGsAg==",
                "cookie": "S=apps-spreadsheets=KfcnOAPM9uHtYNG38vRwBKTOZEbn5_q_nzrowngWvSw; COMPASS=apps-spreadsheets=CmUACWuJVyKlqwqKx4grsiofsosQ_T8hK4Hlt5M-r7wc1OSZEwnxG9jdCGrhbp1c5POnWKMk-iy90G5sIdOzvfSp_LhtFsfldHbJgc7VDgHLD7xikQHLBCP39_K5ho2d3lEn8pe6mhCer52gBhpnAAlriVetc-wpZYtNMKrDU5FfOIHzyTv0IObZ2YhxJcrqTqZLzvWVWfCXCOaYwzeE5-C5ybmpKYdu4v_ZWVAHO41JP6yQvBPJ9evFSoEa0bDXO4IaK4UTQ1LYPsU5WE6hPhMBqmRo1A==; SID=TwjW0U8OwFmuiRAmM_MgxbtQRtYabRQM3YVSe05TKic9NzGU5Cd8Gb7CGfIXge-bUWDhDQ.; __Secure-1PSID=TwjW0U8OwFmuiRAmM_MgxbtQRtYabRQM3YVSe05TKic9NzGUXD6b8Dt6DHovjcl2DdzJQg.; __Secure-3PSID=TwjW0U8OwFmuiRAmM_MgxbtQRtYabRQM3YVSe05TKic9NzGUDSXQvz6SIqEwahTasPoEgA.; HSID=Al-PyC3G7DpkClDnA; SSID=AIrF_JtsDhVdpuAOS; APISID=PhFWOMj1mAhG-Qu3/A2GJX6AIjv4nqQe14; SAPISID=dGMW4cbHhYO-sqjt/AQsJaSPA6mTLeISF8; __Secure-1PAPISID=dGMW4cbHhYO-sqjt/AQsJaSPA6mTLeISF8; __Secure-3PAPISID=dGMW4cbHhYO-sqjt/AQsJaSPA6mTLeISF8; AEC=ARSKqsIvdBVij5WEuBF5zNqWUxK3ZLDHi0oWnicv1oTaaZJPOxXbw3D1Vw; NID=511=Hp3yWu69eTNXv3tiZnhnUnYlj8O3vbyAel5MIvicJFcPIJsqDa7_7fOD8XhdwRZUlo55by06Wq44a72W__QMXZV8O8pEmd-f9p1UxQ3W6DxjxA_bBB6Is2Cui8B8K06o7oeMaeN4pcvBug9jJDUzsgoMgb3CREZXxlIztA7TSSOs6xoMIzw8VMPhvrxu9X8U3FLyI-mmt6TJ3pdL8-A4Y3RxvO_ggWi3FoULqF43Sp-3ub0-knJGypDx-C8JX835t5nbgutjbs4JF9NapNTFvKAjs2kwZUtpEyVk2A4m7hQKkA; 1P_JAR=2023-03-07-14; SIDCC=AFvIBn-oIaaVD_UEFbHmajMcmzrytHRno88aJVh_pE_zyn-E-Cxc_ac2LLxHmDVhvaPUUHzPKfsR; __Secure-1PSIDCC=AFvIBn-o_Pn0Ri1XavP__TjcL-i1EGgVdg8pWLCGrj1hK-ngI9xsBG-B0FgsdT078dcaLJ8tdwzB; __Secure-3PSIDCC=AFvIBn_gBzC5airh6v7rmEm0RjgpIWNHtGTYE6WnEjmWRFhuGWHyhUKjy4IHwgOr1mW--uHpUkU",
                "Referer": "https://docs.google.com/spreadsheets/d/1bk6tvisQGmG7y1TNGEgBjG_US9p-p7Ir3Zi1H5JBrlk/edit",
                "Referrer-Policy": "strict-origin-when-cross-origin"
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





