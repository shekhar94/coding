var fib = function (n) {
    if (n === 0 || n === 1) return n;
    let f1 = 0, f2 = 1;
    for (let i = 2; i <= n; i++) {
        let tmp = f1 + f2;
        f1 = f2;
        f2 = tmp;
    }
    return f2;
};