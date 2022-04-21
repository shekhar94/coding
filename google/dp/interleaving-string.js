// Recursive Approach: TLE
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;

    function recursive(i, j) {
        if (i === s1.length && j === s2.length) return true;
        const k = i + j;

        if (i < s1.length && s1[i] === s3[k] && recursive(i + 1, j)) return true;
        if (j < s2.length && s2[j] === s3[k] && recursive(i, j + 1)) return true;

        return false;
    }

    return recursive(0, 0);
};

// This was the fastest in all the runs
// Memoized recursion: Top-down
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    let dp = new Array(s1.length + 1).fill(-1).map(() => new Array(s2.length + 1).fill(-1));

    function memoized(i, j) {
        if (i === s1.length && j === s2.length) return true;
        if (dp[i][j] !== -1) return dp[i][j];
        const k = i + j;

        if (i < s1.length && s1[i] === s3[k] && memoized(i + 1, j)) return true;
        if (j < s2.length && s2[j] === s3[k] && memoized(i, j + 1)) return true;

        return dp[i][j] = false;
    }

    return memoized(0, 0);
};


// Bottom up Approach: DP
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    let dp = new Array(s1.length + 1).fill(false).map(() => new Array(s2.length + 1).fill(false));
    dp[s1.length][s2.length] = true;

    for (let i = s1.length; i > -1; i--) {
        for (let j = s2.length; j > -1; j--) {
            const k = i + j;
            if (i < s1.length && s1[i] === s3[k] && dp[i + 1][j]) dp[i][j] = true;
            if (j < s2.length && s2[j] === s3[k] && dp[i][j + 1]) dp[i][j] = true;
        }
    }
    return dp[0][0];
};
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));