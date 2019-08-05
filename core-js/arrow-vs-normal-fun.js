const fun1 = function() {
    // this.a = 2;
    // this.b = 3;
}
const fun2 = fun1.bind({a: 3, b: 4});
const f = new fun2();
console.log(f);