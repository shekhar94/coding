// AMD (Asynchronous Module Definition)
// https://www.leanpanda.com/blog/2015-06-28-amd-requirejs-commonjs-browserify/
define("myModule",
    ["foo", "bar"],
    function (foo, bar) {
        let myModule = {
            doStuff: function () {
                console.log("Stuff");
            }
        };
        return myModule;
    }
);

/*
Issue with using commonjs require in browser
Unfortunately, the fact that the call to require()
is synchronous means that it is not well adapted 
to in-browser use, given that the dynamic 
loading of the Javascript file itself has to be asynchronous.
*/
// calculator.js
define("calculator", function() {
    return {
        sum: function(a, b) {
            return a + b;
        }
    };
});
// app.js
define("app", ["calculator"], function(calculator) {
    console.log(calculator.sum(1, 2));
});

