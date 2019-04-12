var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
    name: '',
    sayings: []
};

rl.question("what is the name of a real person? ", function(answer) {
    realPerson.name = answer;
    fs.writeFileSync(realPerson.name + '.md', `${realPerson.name}\n====================\n\n`);
    rl.setPrompt(`what would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying) {
        realPerson.sayings.push(saying.trim());
        fs.appendFile(realPerson.name + '.md', `* ${saying.trim()}\n`, function(err, data) {
            if (err) {
                throw err;
            } else {
                // nothing
            }
        });
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`what else the ${realPerson.name} say? ('exit' to leave) `);
            rl.prompt();
        }
    });
});

rl.on('close', function() {
    console.log("%s says %j", realPerson.name, realPerson.sayings);
    process.exit();
});