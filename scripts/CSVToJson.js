const csv = require("csv-parse/sync");
("use strict");

module.exports = function (grunt) {
    grunt.registerMultiTask("CSVToJson", "description", function () {
        var self = this;
        const columns = self.options().columns;
        self.files.forEach((file) => {
            console.log("file!!!", file);
            file.src.forEach((source) => {
                processFile(source, file.dest, columns);
            });
        });
    });

    function processFile(source, dest, columns) {
        const nestedArray = csv.parse(grunt.file.read(source), { fromLine: 2 });
        const translationObject = transformToJSON(nestedArray, columns);
        const content = JSON.stringify(translationObject, null, 2);
        grunt.file.write(dest, content);
    }

    function transformToJSON(nestedArray, columns) {
        // crear starter object : {es: [], pt: [], en: []}
        const result = {};
        for (let i = 1; i < columns.length; i++) {
            const lang = columns[i];
            // empezamos con un array o objeto dependiendo si la primera key es un numero o un string.
            // esta medio raro habria que mejorarlo
            if(nestedArray[0][0].split(".")[0].match(/^\d+/) === null){ 
                result[lang] = {}; 
            }else {
                result[lang] = []; 
            }
        }
        nestedArray.forEach((line) => {
            const key = line[0];
            for (let i = 1; i < columns.length; i++) {
                const lang = columns[i];
                let lineToAdd = line[i];
                // solo agreamos si tenemos algo
                if(lineToAdd){
                    result[lang] = namespacedKeyToObject(key,lineToAdd, ".", result[lang]);
                }
            }
        });
        return result
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
 * 
 * esto genera un objeto desde un key del estilo foo.bar.baz y una value tipo "algo"
 * si las sub key es un numero genera un array ej foo.0.baz
 * append le pasamos otro objeto para que lo junte. ejemplo:
 * si primero le pasamos "foo.bar.baz" y "algo"
 * devuelve :
 * {
 *  foo: {
 *    bar: {
 *      baz: "algo"
 *    }
 *  }
 * }
 *  si le pasamos ahora "foo.bar.foz" "otra cosa" y en append le pasamos el objeto anterior devuelve:
 * 
 *{
 *  foo: {
 *    bar: {
 *      baz: "algo",
 *      foz: "otra cosa"
 *    }
 *  }
 * }
 */

function namespacedKeyToObject(key, value, namespaceSeparator = ".", append) {
    const nameSpaces = parseIntInArray(key.split(namespaceSeparator));
    let result;
    if (typeof nameSpaces[0] === "number"){
        //es un array
        result = append || [];
    } else {
        // es un objeto
        result = append || {};
    }

    let temp = result;
    nameSpaces.forEach((subKey, index) => {
        if (index >= nameSpaces.length - 1) {
            //ultimo
            temp[subKey] = value;
        } else {
            if (typeof nameSpaces[index+1] === "number") {
                //tenemos que hacer un array
                temp[subKey] = temp[subKey] || [];
            } else {
                // tenemos que hacer un objeto
                temp[subKey] = temp[subKey] || {};
            }
        }
        temp = temp[subKey];
    });
    return result;
}

function parseIntInArray(arr) {
    return arr.map((elem) => {
        if (elem.match(/^\d+$/) !== null) {
            let res = parseInt(elem);
            if(isNaN(res)) throw "boom!!!"
            return res;
        }
        return elem;
    } )
}
