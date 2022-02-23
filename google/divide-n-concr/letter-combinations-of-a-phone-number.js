// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

let res = [];
const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}

function lc(digits, i, str) {
    if (i > digits.length) return;
    if (i === digits.length) return res.push(str);

    const char = digits[i];
    const choices = map[char];

    for (let j = 0; j < choices.length; j++) {
        lc(digits, i + 1, `${str}${choices[j]}`);
    }
}

function letterCombinations(digits) {
    res = [];
    if (digits.length > 0)
        lc(digits, 0, "");
    return res;
}

function main() {
    const digits = "23";
    console.log(letterCombinations(digits));
}

main();