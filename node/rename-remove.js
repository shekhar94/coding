var fs = require('fs');

if (!fs.exists("crud")) {
    try {
        fs.mkdirSync("crud");
    } catch (err) {
        console.log(err);
    }
}
fs.writeFile("crud/config.json", JSON.stringify({ db: "mongo" }), function(err) {
    if (err) {
        console.log(err);
    }
});
fs.rename("crud/config.json", "crud/move/config.js", function(err) { // moving and rename file
    if (err) {
        console.log(err);
    }
});
fs.rename("crud/config.json", "crud/config.js", function(err) {
    if (err) {
        console.log(err);
    }
});

fs.unlink("crud/move/config.js", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("file removed");
    }
});