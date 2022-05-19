var tribonacci = function (n) {
    if (n === 0 || n === 1) return n;
    if (n === 2) return 1;
    let t0 = 0, t1 = 1, t2 = 1;
    for (let i = 3; i <= n; i++) {
        let tmp = t0 + t1 + t2;
        t0 = t1
        t1 = t2;
        t2 = tmp;
    }
    return t2;
};