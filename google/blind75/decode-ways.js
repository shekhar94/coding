// Recursive Approach: TLE
function recursive(arr, i) {
    if (arr[i] === 0) return 0;
    if (i === arr.length) return 1;

    let res = recursive(arr, i + 1);

    if (i + 1 < arr.length) {
        const num = parseInt(`${arr[i]}${arr[i + 1]}`);
        if (num <= 26) {
            res += recursive(arr, i + 2);
        }
    }

    return res;
}

var numDecodings = function (s) {
    const arr = s.split('').map(Number);
    return recursive(arr, 0);
};


// Memoized Recursion
let dp;
function memoized(arr, i) {
    if (arr[i] === 0) return 0;
    if (i === arr.length) return 1;
    if (dp[i] !== -1) return dp[i];

    let res = memoized(arr, i + 1);

    if (i + 1 < arr.length) {
        const num = parseInt(`${arr[i]}${arr[i + 1]}`);
        if (num <= 26) {
            res += memoized(arr, i + 2);
        }
    }

    return dp[i] = res;
}

var numDecodings = function (s) {
    const arr = s.split('').map(Number);
    dp = new Array(s.length).fill(-1);
    return memoized(arr, 0);
};

console.log(numDecodings("11106"));
console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));