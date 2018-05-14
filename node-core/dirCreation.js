var fs = require('fs');

if (fs.existsSync('dir')) {
    console.log("Directory exists..");
} else {
    fs.mkdir('dir', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("dir created");
        }
    });
}