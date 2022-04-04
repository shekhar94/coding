var addStrings = function (num1, num2) {
    let n1 = num1.split('').map(Number);
    let n2 = num2.split('').map(Number);

    let i = num1.length - 1, j = num2.length - 1;
    let carry = 0;
    let res = [];

    while (i > -1 || j > -1) {
        let s1 = i > -1 ? n1[i] : 0;
        let s2 = j > -1 ? n2[j] : 0;
        let sum = s1 + s2 + carry;
        if (sum > 9) {
            carry = 1;
            res.push(sum % 10);
        } else {
            res.push(sum);
            carry = 0;
        }
        i--; j--;
    }

    if (carry) res.push(carry);
    return res.reverse().join('');
};