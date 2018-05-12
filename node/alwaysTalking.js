var sayings = [
    "shekhar",
    "suman",
    "kumar"
];
var interval = setInterval(function() {
    var i = Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]}\n`);
}, 1000);

process.stdin.on('data', function(data) {
    console.log(`STDIN Data received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});