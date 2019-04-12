var exec = require("child_process").exec;

// to run available environment commands (cmd, terminal etc)
// exec("open http://www.linkedin.com");

exec('dir', function(err, stdout) {
    if (err) {
        throw err;
    }
    console.log("dir finished");
    console.log(stdout);
})