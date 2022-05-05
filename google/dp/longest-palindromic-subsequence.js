// Recursive Approach: TLE
var longestPalindromeSubseq = function (s) {
    const [str1, str2] = [s, s.split('').reverse().join('')];

    function lcs(i, j) {
        if (i < 0 || j < 0) return 0;

        if (str1[i] === str2[j]) return 1 + lcs(i - 1, j - 1);
        return Math.max(
            lcs(i - 1, j),
            lcs(i, j - 1),
        );
    }

    return lcs(s.length - 1, s.length - 1);
};
// Memoized Recursion
var longestPalindromeSubseq = function (s) {
    const [n, str1, str2] = [s.length, s, s.split('').reverse().join('')];
    const dp = new Array(n).fill(-1).map(() => new Array(n).fill(-1));

    function lcs(i, j) {
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        if (str1[i] === str2[j]) return dp[i][j] = 1 + lcs(i - 1, j - 1);
        return dp[i][j] = Math.max(
            lcs(i - 1, j),
            lcs(i, j - 1),
        );
    }

    return lcs(n - 1, n - 1);
};

console.log(longestPalindromeSubseq("aabaa"));