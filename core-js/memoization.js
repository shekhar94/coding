// https://scotch.io/tutorials/understanding-memoization-in-javascript


/* 
Memoization is an optimization technique that speeds up applications 
by storing the results of expensive function calls and returning 
the cached result when the same inputs are supplied again. 

Functions that operate on other functions, 
either by taking them as arguments or by returning them, 
are called higher-order functions.
*/

function memo(fun) {
    const cache = new Map();
    return function () {
        const args = [...arguments];
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log(`returning from cache key:: ${key} :: value :: ${cache.get(key)}`);
            return cache.get(key);
        } else {
            const val = fun.apply(this, args);
            cache.set(key, val);
            console.log(`calculating result:: key :: ${key} :: val :: ${val}`);
            return val;
        }
    }
}

function add(a, b) {
    const sum = a + b;
    console.log(`from add:: ${sum}`);
    return sum;
}

const memoSum = memo(add);

memoSum(2, 3);
memoSum(1, 3);
memoSum(1, 3);
memoSum(2, 3);
memoSum(2, 5);