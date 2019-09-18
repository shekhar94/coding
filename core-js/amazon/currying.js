function curry(fun, ...args) {
    if (fun.length <= args.length) {
        return fun(...args);
    } else {
        return (...more) => curry(fun, ...args, ...more);
    }
}

function sum(a, b, c, d) {
    return (a + b + c + d);
}
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4));