function fibonacci(n) {
    let f0 = 0;
    let f1 = 1;
    if (n === 0) return f0;
    if (n === 1) return f1;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

function main() {
    console.log(fibonacci(4));
}
main();