// control line spacing while using stdio
// process.stdout.write("Hello ");
// process.stdout.write("Shekhar \n\n");

var questions = [
    "What is your name?",
    "Your company"
];
var answers = [];

function ask(i) {
    process.stdout.write("\n\n\n");
    process.stdout.write(questions[i]);
    process.stdout.write(' >');
}
process.stdin.on('data', function(data) { // listener gets triggered when user enters something using stdin
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        process.stdout.write("\n\n");
        ask(answers.length);
    } else {
        process.exit();
    }
});
process.on('exit', function() { // listener gets triggered on process.exit();
    process.stdout.write(`${answers[0]} ${answers[1]}`);
});
ask(0);