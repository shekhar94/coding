const fun1 = function () {
    console.log('Normal function this::', this);
}
const fun2 = fun1.bind({ a: 3, b: 4 });
fun2();

const fun3 = () => {
    console.log('Arrow function this::', this);
}
const fun4 = fun3.bind({ a: 3, b: 4 });
fun4();