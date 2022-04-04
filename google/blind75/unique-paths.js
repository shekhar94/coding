// Recursive Approach: TLE
function recursive(i, j, m, n) {
    if (i > m || j > n) return 0;
    if (i === m && j === n) return 1;

    return recursive(i, j + 1, m, n) + recursive(i + 1, j, m, n);
}

var uniquePaths = function (m, n) {
    return recursive(1, 1, m, n);
};


// Memoized recursion
let dp;
function memoized(i, j, m, n) {
    if (i > m || j > n) return 0;
    if (i === m && j === n) return 1;
    if (dp[i][j] !== -1) return dp[i][j];

    return dp[i][j] = memoized(i, j + 1, m, n) + memoized(i + 1, j, m, n);
}

var uniquePaths = function (m, n) {
    dp = new Array(m + 1).fill(-1).map(item => new Array(n + 1).fill(-1));
    return memoized(1, 1, m, n);
};




console.log(uniquePaths(3, 2));