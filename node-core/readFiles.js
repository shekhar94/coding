var path = require("path");
var fs = require("fs");

fs.readdir("./lib", function(err, files) {
    if (err) {
        console.log(err);
    } else {
        files.forEach(function(fileName) {
            var file = path.join(__dirname, 'lib', fileName);
            var stats = fs.statSync(file);
            if (stats.isFile() && fileName !== '.DS_Store') {
                fs.readFile(file, 'UTF-8', function(err, contents) {
                    console.log(contents);
                });
            }
        });
    }
})