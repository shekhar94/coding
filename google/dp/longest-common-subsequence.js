// Recursive Approach
function lcs(s1, s2, i, j) {
    if (i < 0 || j < 0) return 0;
    if (s1[i] === s2[j]) return 1 + lcs(s1, s2, i - 1, j - 1);

    return Math.max(
        lcs(s1, s2, i - 1, j),
        lcs(s1, s2, i, j - 1)
    );
}


// Memoized solution for above recursive approach
let dp = [];
function lcsMemoized(s1, s2, i, j) {
    if (i < 0 || j < 0) return 0;
    if (dp[i] && dp[i][j]) return dp[i][j]; // return result from dp table if already calculated
    // Init the dp if not already initialized
    if (!dp[i]) dp[i] = [];
    if (!dp[i - 1]) dp[i - 1] = [];

    if (s1[i] === s2[j]) {
        dp[i - 1][j - 1] = lcsMemoized(s1, s2, i - 1, j - 1);
        return 1 + dp[i - 1][j - 1];
    }

    dp[i - 1][j] = lcsMemoized(s1, s2, i - 1, j);
    dp[i][j - 1] = lcsMemoized(s1, s2, i, j - 1);
    return Math.max(dp[i - 1][j], dp[i][j - 1]);
}

function main() {
    // let s1 = "abcde", s2 = "ace";
    // let s1 = "abc", s2 = "abc";
    let s1 = "abc", s2 = "def";
    dp = [];
    console.log(lcsMemoized(s1, s2, s1.length - 1, s2.length - 1));
}

main();