// F2F**********************************************
/*
Language and framework -
Candidate will be interviewed in relevant technologies
like reactjs, js, nodejs, expressjs, J2EE, mongodb,
postgress and cloud computing environment like AWS.
We will focus on skills mentioned in resume.
Candidate will be expected to write lots of code in this round.
*/

var length = 5;
function fn() {
    console.log(this.length);
}
const obj = {
    length: 10,
    method: function (fn) {
        fn();
        arguments[0]();
    }
}

obj.method(fn, 1);

// ************************************
const obj = {
    a: 10,
    method: () => {
        console.log(this.a);
    }
}

obj.method();

/* 
Look-and-say sequence
Write function to generate nth number of look-and-say sequence
*/
// 1, 11, 21, 1211, 111221, 312211, 13112221
function look_and_say(n) {
    const arr = ['1'];
    for (let i = 1; i < n; i++) {
        const prev = arr[i - 1];
        const current = generateNum(prev);
        arr.push(current);
    }
    console.log(arr);
}
function generateNum(prevNo) {
    let i = 0;
    let current_char = prevNo[0];
    let count = 0;
    let num = '';
    while (i < prevNo.length) {
        i++;
        if (prevNo[i] === current_char) {
            count++;
        } else {
            num = `${num}${count + 1}${current_char}`;
            current_char = prevNo[i];
            count = 0;
        }
    }
    return num;
}

look_and_say(7);
/*
Operators in redux
Map operator

Design pattern
AMD (How amd design pattern works, how dependencies gets loaded)
UMD (Supports both commonjs and AMD can you tell me little bit about implementation details)
Observer
Module
commonjs
ES-harmony

Someone is able to get a valid token for out website
Lets assume its a wallet how you will invalidate the token once
some transaction happens and user reports for the same.

CAP theorem databases
ACID properties
Vertical vs Horizontal scaling

How JWT works

Eager vs Lazy
Promise and Observable which one is eager and which is lazy? why?
The first difference is that a Promise is eager, whereas an Observable is lazy.
The Promise in the above example is eager, since the callback function provided to a
Promise constructor function is executed immediately.

If you create an Observable, you provide a callback
function that will be called upon invoking subscribe
method on the Observable object.

The next difference is that a Promise object
may provide only a single value.
It can be an array but it’s still a single object.
On the contrary, an Observable may emit multiple values over time.

*/


