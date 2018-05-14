var fs = require('fs');

fs.readdir('./lib', function(err, files) { // asynchronous
    if (err) {
        throw err;
    }
    console.log(files);
});

// var files = fs.readdirSync('./lib');
// console.log(files);
console.log("Reading files...");