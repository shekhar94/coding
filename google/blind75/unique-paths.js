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



var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
    function helper(r, c) {
        if (r === m - 1 && c === n - 1) return 1;
        if (r === m || c === n) return 0
        if (dp[r][c] !== -1) return dp[r][c];

        return dp[r][c] = helper(r + 1, c) + helper(r, c + 1);
    }

    return helper(0, 0);
};

console.log(uniquePaths(3, 2));