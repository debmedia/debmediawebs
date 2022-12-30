const fs = require('fs');
'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('cleanTranslations', 'description', function() {

        var self = this;
        
        const files = fs.readdirSync(self.data.baseInputFiles);
        for (let file of files){
          const trans = loadJSON(self.data.baseInputFiles + file);
          cleanStrings(trans);
          fs.writeFileSync(self.data.baseInputFiles + file, JSON.stringify(trans, null, 2), {encoding: "utf-8"});
        }
    });
};


function cleanStrings(obj){
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (typeof obj[prop] === 'string'){
      // cleanString
      obj[prop] = cleanString(obj[prop]);
    } else if (typeof obj[prop] === 'object'){
      cleanStrings(obj[prop]);
    }
  });
}
function cleanString(str) {
  str = str.replace(/</g," <");
  str = str.replace(/>/g,"> ");
  str = str.trim();
  str = str.replace(/ +/g," "); // mas de un espacio lo hacemos 1
  str = str.replace(/(?<=<[^>]*) +(?=>)/g,"");
  return str;
}
function loadJSON(path){
  return JSON.parse(fs.readFileSync(path ,{encoding: "utf-8"}));
}