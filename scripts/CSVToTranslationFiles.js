const assert = require("node:assert");
const csv = require("csv-parse/sync");
("use strict");

module.exports = function (grunt) {
    grunt.registerMultiTask("CSVToTranslations", "description", function () {
        var self = this;
        const columns = self.options().columns;
        const dirsToSave = self.options().dirs;
        console.log("columns", columns);
        //console.log(self);
        self.files.forEach((file) => {
            console.log("file!!!", file);
            file.src.forEach((source) => {
                processFile(source, file.dest, columns, dirsToSave);
            });
        });
    });

    function processFile(source, dest, columns, dirsToSave) {
        // console.log(source);
        const nestedArray = csv.parse(grunt.file.read(source), { fromLine: 2 });
        // console.log(nestedArray);
        const translationObject = transformToJSON(nestedArray, columns);
        const res = stringifyTranslations(translationObject);
        createFiles(res, dest, dirsToSave);
        // console.log(res);
    }

    function transformToJSON(nestedArray, columns) {
        // crear starter object : {es: {}, pt: {}, en: {}}
        const result = {};
        for (let i = 1; i < columns.length; i++) {
            const lang = columns[i];
            result[lang] = {};
        }
        nestedArray.forEach((line) => {
            const key = line[0];
            for (let i = 1; i < columns.length; i++) {
                const lang = columns[i];
                let lineToAdd = line[i];
                // solo agreamos si tenemos algo
                if(lineToAdd){
                    if (i>1) lineToAdd = addTags(line[1], line[i]); // esto deberira ser un postproceso y no estar aca
                    result[lang] = namespacedKeyToObject(key,lineToAdd, ".", result[lang]);
                }
            }
        });
        // console.log("result", JSON.stringify(result, null, 2));
        //assert.deepEqual(result, resultadoEsperado, "Fallo la creacion del objeto");
        return result
    }

    function stringifyTranslations(obj) {
      /** devuelve algo asi
       * [{dir: "es", fileName: "test", content: "..."}]
       */
      const result = [];
      const dirs = Object.getOwnPropertyNames(obj);
      dirs.forEach((dir)=> {
        const files = Object.getOwnPropertyNames(obj[dir]);
        files.forEach((file) => {
          result.push({dir: dir, fileName: file, content: JSON.stringify(obj[dir][file], null, 2)});
        });
      });
      return result;
    }

    function createFiles(fileDatas, dest, dirsToSave){
      fileDatas.forEach((fileData) => {
        if(dirsToSave.includes(fileData.dir)){
            grunt.file.write(`${dest}/${fileData.dir}/${fileData.fileName}.json`, fileData.content);
        }
      });
    }
};
/** key es un string
 * si entra "bar.foo.baz"
 * devuelve
 * {
 *  bar: {
 *    foo: {
 *      baz: value
 *    }
 *  }
 * }
 */

function namespacedKeyToObject(key, value, namespaceSeparator = ".", append) {
    const result = append || {};
    let temp = result;
    const nameSpaces = key.split(namespaceSeparator);
    nameSpaces.forEach((subKey, index) => {
        if (index >= nameSpaces.length - 1) {
            //ultimo
            temp[subKey] = value;
        } else {
            temp[subKey] = temp[subKey] || {};
        }
        temp = temp[subKey];
    });
    return result;
}

const resultadoEsperado = {
    es: {
        test: {
            HEADER: {
                TITLE: "Titulo",
                CAPTION: "Caption",
                SUBTITLE: "Subtitle",
            },
            MARKET: {
                TITLE: "Market Title",
            },
        },
    },
    pt: {
        test: {
            HEADER: {
                TITLE: "Titulo Portugués",
                CAPTION: "Caption Portugués",
                SUBTITLE: "Subtitle Portugués",
            },
            MARKET: {
                TITLE: "Market Title Portugués",
            },
        },
    },
    en: {
        test: {
            HEADER: {
                TITLE: "Titulo Inglés",
                CAPTION: "Caption Inglés",
                SUBTITLE: "Subtitle Inglés",
            },
            MARKET: {
                TITLE: "Market Title Inglés",
            },
        },
    },
};


function addTags(strA, strB){
  
    const pattern = /(<[\w\d ]+>)|(<\/[\w\d ]+>)|(<[\w\d ]+\/>)|[\S]+/g;
    
    const matchedA = strA.match(pattern);
    const matchedB = strB.match(pattern);
    if(matchedB === null) return "";
    const tagIndices = []
    matchedA.forEach((word, index)=> {
      if(word[0] === "<") {
        tagIndices.push(index);
      }
    })
    
  
    for (let i = 0; i < tagIndices.length; i++) {
      const tagIndex = tagIndices[i];
      matchedB.splice(tagIndex, 0, matchedA[tagIndex]);
    }
  
    return matchedB.join(" ");
  }

// Key, Español, Portugués, Inglés
// test.HEADER.TITLE,"Titulo","Titulo Portugués","Titulo Inglés"
// test.HEADER.CAPTION,"Caption","Caption Portugués","Caption Inglés"
// test.HEADER.SUBTITLE,"Subtitle","Subtitle Portugués","Subtitle Inglés"
// test.MARKET.TITLE,"Market Title","Market Title Portugués","Market Title Inglés"

/**
 * pasos
 * 1 buscar archivos lo que sea terminar con un arvhivo csv cargado
 * 2 Parsear csv a array
 * 3 convertir array a objeto transformToJSON(nestedArray) devuelve el json en formato correcto
 * 4 crear
 */
