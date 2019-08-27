// Shekhar


//////////////////////////////find the average value of x

var arr = [{ x: 1 }, { x: 5 }, { x: 10 }, ...]

function avg(arr) {
    let total = arr.reduce((acc, val) => acc + val, 0);

    console.log(total / arr.length);
}


/////////////////////

function Foo(x, y) {
    this.x = x;
    this.y = y;
}

var a = new Foo(1, 2);
var b = Foo(10, 20);


///////////////////////let's convert all JS arrays to behave like a circular list

var arr = [{ x: 1 }, { x: 5 }, { x: 10 }]

arr.next(); // {x:1}
arr.next(); // {x:5}
arr.next(); // {x:10}
arr.next(); // {x:1}

Array.prototype.pointer = 0;
Array.prototype.next = function () {
    let arr = this;
    if (arr.pointer % arr.length === 0) {
        arr.pointer = 0;
    }
    return arr[arr.pointer];
}

//////////////////////////
//adder(5); //5
//adder(2); //7
//adder(8); //15



let adder = (function () {
    let total = 0;
    return function (val) {
        return total += val;
    }
}
)();


////////////////////////////NodeJS :  app.js - listen "a" for "hello" event and do a console.log

class ABC extends EventEmitter {
    constructor() {
        super(this);
    }
}

let a = new ABC();

///////////////////////////

function badDog() {
    // blocks the event loop for 15sec
    // then says "woof"
    let start = Date.now();
    while (Date.now() - start >= 15000) {

    }
    console.log('woof');
}

function goodDog() {
    // does not block the loop
    // at the end of 15 secs it will say "woof"
    let timeOut = setTimeout(() => {
        console.log('woof');
    }, 15000)
}

///////////////////////////





