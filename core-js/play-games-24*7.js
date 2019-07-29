/* 
1. Given stock prices across days optimize the profit
    priceArr = [10, 15, 12, 8, 14]
2. setTimeout is it native to javascript
3. Event loop
4. Difference between having a method on prototype vs in object declaration


1. Deep clone object using native js methods
2. Lazy loading angular
3. closure
4. Debounce, memoization 
5. Rxjs parallel and sequential api calls
6. ES6 features
7. arrow function
let fun = function(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
}
let obj = new fun(1, 2);
console.log(obj);


let fun = (p1, p2) => {
    this.p1 = p1;
    this.p2 = p2;
}
let obj = new fun(p1, p2);
console.log(obj);

let fun = function () {
    console.log(arguments);
}

let fun = () => {
    console.log(arguments);
}
8. How we can achieve object oriented behaviour in js (incapsulation, inheritance, polymorphism)
9. Providers in angular (injecting service and using it)
If a service is in provider list of parent module can we use it in child component(inject it)
If a service is in provider list in sibling module can we use it in other sibling

10. 

let fun = () => {
    console.log(this.a, this.b);
}
let fun1 = fun.bind({a: 1, b: 2});
fun1(); What it will print


1. Component interaction
2. css profiling (how to check which part of css is slowing loading time)
3. Production deployment of frontend apps
4. CSS standards for making application consistent
5. Improving user interaction (if website is loading very slow in first time. How would you debug which
    part is creating problem)
6. Design architecture for a flow diagram app
7. 

*/