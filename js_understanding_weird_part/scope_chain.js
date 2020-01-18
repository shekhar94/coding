function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();



function a() {
    // changing lexical scope of function b
    function b() {
        console.log(myVar);
    }
    // on commenting this line function b looks for myVar in parent scope
    var myVar = 2;
    b();
}

var myVar = 1;
a();