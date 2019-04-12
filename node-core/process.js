// Process

console.log(process.argv);
// node process --user Shekhar --greeting "Hello"

function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}
var greeting = grab('--greeting');
var user = grab('--user');

if (!greeting || !user) {
    console.log("not found");
} else {
    console.log(`greeting ${greeting}, user ${user}`);
}