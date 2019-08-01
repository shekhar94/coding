// Arrow function doesn't has arguments array

const f = () => {
    console.log(arguments);
}
f(1, 2, 3);
// VM1713:1 Uncaught ReferenceError: arguments is not defined

// Using arguments in arrow function
const f = (...arguments) => {
    console.log(arguments);
}

f(1, 2, 3);
// [1, 2, 3]

