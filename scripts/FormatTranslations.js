const fs = require('fs');
'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('formatTranslations', 'description', function() {

        var self = this;
        self.files.forEach((file)=>{
          file.src.forEach((source)=>{
            grunt.log.writeln("Formatting: " + source)
            const trans = loadJSON(source);
            fs.writeFileSync(source, JSON.stringify(trans, null, 2), {encoding: "utf-8"});
          })
        })
    });
};

function loadJSON(path){
  return JSON.parse(fs.readFileSync(path ,{encoding: "utf-8"}));
}