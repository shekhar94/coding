var getSum = function (a, b) {
    while (b) {
        let tmp = (a & b) << 1;
        a = a ^ b;
        b = tmp;
    }
    return a;
};

console.log(getSum(1, 2));