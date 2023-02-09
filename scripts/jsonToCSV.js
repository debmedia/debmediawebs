'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('JSONsToCSV', 'description', function() {

        var self = this;
        const topLevelKeys = self.options().topLevelKeys;
        const header = self.options().header;
        const files = self.files;
        
        for (let file of files) {
          for (let src of file.src){
            console.log("JSONsToCSV", src);
            const json = grunt.file.readJSON(src);
            let primaryKey = topLevelKeys[0];
            let csv = header.join(",") + "\n";
            const fileNameWithOutExtension = src.split("/").pop().split(".")[0];
            if(typeof json[primaryKey] ==="object") {
              csv += objectsToCSV(json[primaryKey], topLevelKeys.slice(1).filter(key => typeof json[key] === "object").map((key) => json[key]), fileNameWithOutExtension);
              grunt.file.write(file.dest, csv);
            } else {
              grunt.warn("Error processing file: " + src);
            }
          }
        }
    });
};

// recursivamente toma un objecto y pasa las propiedades a la primera columna, los valores a la segunda de un csv
// si se pasa un array de objetos en el segundo argumento, los valores se agregan en las siguientes columnas.
// el tercer argumento es un nombre padre de todo
function objectsToCSV(obj, objs, pName){
  const propNames = Object.getOwnPropertyNames(obj);
  // sacamos length en caso de un array
  if(Array.isArray(obj) && propNames.indexOf("length") >= 0) {
    propNames.splice(propNames.indexOf("length"));
  } 
  const csvSeparator = ',';
  const nestingSeparator= '.';
  const lineEnding= "\n";
  let csv = '';
  for (let i = 0; i < propNames.length; i++){
    const propName = propNames[i];
    if (typeof obj[propName] ==='string' || typeof obj[propName] ==='number'){
      const value = obj[propName];
      csv = csv.concat(pName).concat(nestingSeparator).concat(propName).concat(csvSeparator).concat(sanitizeForCSV(value));
      for(let subObj of objs){
        if(typeof subObj[propName] === 'string' || typeof subObj[propName] === 'number'){
          const subValue = subObj[propName];
          csv = csv.concat(csvSeparator).concat(sanitizeForCSV(subValue));
        } else {
          csv = csv.concat(csvSeparator);
        }
      }
      csv = csv.concat(lineEnding);
    } else if (typeof obj[propName] ==='object'){
      let newObjs = [];
      for (let subObj of objs){
        newObjs.push(subObj[propName]? subObj[propName]: {});
      }
      const insideCsv = objectsToCSV(obj[propName],newObjs, pName.concat(nestingSeparator).concat(propName));
      csv = csv.concat(insideCsv);
    }
  }
  return csv;
}

function sanitizeForCSV(str){
  if(typeof str === "number") return str;
  return "\""+ str.replaceAll("\"", "\"\"") +"\"";
}

