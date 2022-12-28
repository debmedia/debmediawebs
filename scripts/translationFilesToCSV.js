const fs = require('fs');
'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('translationsToCSV', 'description', function() {

        var self = this;
        
        const files = fs.readdirSync(self.data.baseInputFiles);
        const compareFiles = self.data.compareInputFiles;
        let csv = self.data.header + "\n";
        for (let file of files){
          const trans = loadJSON(self.data.baseInputFiles + file);
          const compareTrans = [];
          for(let compareFile of compareFiles) {
            try {
              compareTrans.push(loadJSON(compareFile + file));
            } catch (error) {
              console.log('Error loading JSON', error.message);
              compareTrans.push({});
            }
          }
          csv = csv.concat(objectsToCSV(trans,compareTrans, file.split(".")[0]));
        }

        fs.writeFileSync(self.data.outputFile, csv, {encoding: "utf-8"} );
    });
};

// recursivamente toma un objecto y pasa las propiedades a la primera columna, los valores a la segunda de un csv
// si se pasa un array de objetos en el segundo argumento, los valores se agregan en las siguientes columnas.
// el tercer argumento es un nombre padre de todo
function objectsToCSV(obj, objs, pName){
  const propNames = Object.getOwnPropertyNames(obj);
  const csvSeparator = ',';
  const nestingSeparator= '.';
  const lineEnding= "\n";
  let csv = '';
  for (let i = 0; i < propNames.length; i++){
    const propName = propNames[i];
    if (typeof obj[propName] ==='string'){
      const value = obj[propName];
      csv = csv.concat(pName).concat(nestingSeparator).concat(propName).concat(csvSeparator).concat("\""+value +"\"");
      for(let subObj of objs){
        if(typeof subObj[propName] === 'string'){
          const subValue = subObj[propName];
          csv = csv.concat(csvSeparator).concat("\""+ subValue +"\"");
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

function loadJSON(path){
  return JSON.parse(fs.readFileSync(path ,{encoding: "utf-8"}));
}