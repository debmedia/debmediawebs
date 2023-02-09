'use strict';

/**
 * este script agarra un json codificado en csv donde la primera columan es key del estilo fileName.Key.foo.bar
 */

module.exports = function(grunt) {

    grunt.registerMultiTask('splitCSV', 'description', function() {

        var self = this;
        console.log(self);

        const header = self.options().header;
        const files = self.files;
        
        for (let file of files) {
          for (let src of file.src){
            const content = grunt.file.read(src, {encoding: "utf8"});
            processFile(content, file.dest, header);
          }
        }
    });

    function processFile(content, dest, header){
      const lines = content.split("\n").map(line => line.split(","));
      //console.log(lines);
      const res = {}
      for (let line of lines) {
        if (line[0].match(/^[\d\w-]+\./)){
          const fileName = line[0].split(".")[0];
          line[0] = line[0].replace(/^[\w\d-]+\./, "");
          if(!res[fileName]) res[fileName] = []
          res[fileName].push(line.join(","));
        }
      }

      const fileNames = Object.getOwnPropertyNames(res);
      for(let fileName of fileNames) {
        let fileContent = header + "\n" + res[fileName].join("\n");
        grunt.file.write(dest + fileName + ".csv", fileContent);
      }
    }
};
