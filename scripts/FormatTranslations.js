const fs = require('fs');
'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('formatTranslations', 'description', function() {

        var self = this;
        
        const files = fs.readdirSync(self.data.baseInputFiles);
        for (let file of files){
          const trans = loadJSON(self.data.baseInputFiles + file);
          fs.writeFileSync(self.data.baseInputFiles + file, JSON.stringify(trans, null, 2), {encoding: "utf-8"});
        }
    });
};

function loadJSON(path){
  return JSON.parse(fs.readFileSync(path ,{encoding: "utf-8"}));
}