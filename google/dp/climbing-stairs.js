// Most Efficient
function climbStairs(n) {
    const DP = [];
    DP[1] = 1;
    DP[2] = 2;
    for (let i = 3; i <= n; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }
    return DP[n];
}

// Recursive Approach: TLE
function helper(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return helper(n - 1) + helper(n - 2);
}
// Memoized Recursion
function helper(n, dp) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (dp[n] !== -1) return dp[n];

    dp[n - 1] = helper(n - 1, dp);
    dp[n - 2] = helper(n - 2, dp)
    return dp[n] = dp[n - 1] + dp[n - 2];
}
// Solution ends here
function main() {
    const n = 3;
    console.log(climbStairs(n));
    // let dp = new Array(n + 1).fill(-1);
    // console.log(helper(n, dp));
}

main();