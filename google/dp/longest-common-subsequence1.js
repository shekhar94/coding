var longestCommonSubsequence = function (s1, s2) {
    let [l1, l2] = [s1.length, s2.length];
    let dp = new Array(l1).fill(-1).map(() => new Array(l2).fill(-1));

    function lcs(i, j) {
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        if (s1[i] === s2[j]) return dp[i][j] = 1 + lcs(i - 1, j - 1);
        return dp[i][j] = Math.max(
            lcs(i - 1, j),
            lcs(i, j - 1),
        );
    }
    lcs(l1 - 1, l2 - 1);
    let max = 0;
    for (let i = 0; i < l1; i++) {
        for (let j = 0; j < l2; j++) {
            max = Math.max(max, dp[i][j]);
        }
    }
    return max;
}

console.log(longestCommonSubsequence("abcde", "ace"));