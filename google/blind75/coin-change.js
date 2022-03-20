// https://leetcode.com/problems/coin-change/discuss/1867086/Coin-Change-or-DP-or-Recursive-or-Memoized-or-Tabulation-or-Time-O(N*M)-N%3A-coins-size-M%3A-amount
// Recursive Approach: TLE
function recursive(coins, amount, n) {
    if (amount === 0) return 0;
    if (n === 0) return Number.MAX_SAFE_INTEGER;

    if (coins[n - 1] <= amount) {
        return Math.min(
            // select current coin: coins[n-1], because we have unlimited supply of coins
            // we can still select the same coin again so the last parameter remains same
            1 + recursive(coins, amount - coins[n - 1], n),
            recursive(coins, amount - 0, n - 1) // not selecting current coin
        );
    } else return recursive(coins, amount - 0, n - 1); // not selecting current coin
}

var coinChange = function (coins, amount) {
    // Recursive
    const minCoins = recursive(coins, amount, coins.length);
    return minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
}
// ----------------------------------------------------------------------------

// Memoization Approach
function memoized(coins, amount, n, dp) {
    if (amount === 0) return 0;
    if (n === 0) return Number.MAX_SAFE_INTEGER;

    if (dp[n][amount] !== -1) return dp[n][amount];

    if (coins[n - 1] <= amount) {
        return dp[n][amount] = Math.min(
            // select current coin: coins[n-1], because we have unlimited supply of coins
            // we can still select the same coin again so the last parameter remains same
            1 + memoized(coins, amount - coins[n - 1], n, dp),
            0 + memoized(coins, amount - 0, n - 1, dp) // not selecting current coin
        );
    } else return dp[n][amount] = 0 + memoized(coins, amount - 0, n - 1, dp); // not selecting current coin
}

var coinChange = function (coins, amount) {
    // Memoized
    const n = coins.length;
    dp = new Array(n + 1).fill(-1).map(() => new Array(amount + 1).fill(-1));
    const minCoins = memoized(coins, amount, coins.length, dp);
    return minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
}
// ----------------------------------------------------------------------------------

// Tabulation Approach
// Unbounded knapsack problem
function helper(coins, amount) {
    // init dp
    const n = coins.length;
    dp = new Array(n + 1).fill(-1).map(() => new Array(amount + 1).fill(-1));
    // Given total amount = 0, min_no_of_coins required = 0 
    for (let i = 1; i < n + 1; i++) dp[i][0] = 0;

    // Given that there are 0 coins available for total_sum infinite coins will be required
    for (let j = 0; j < amount + 1; j++) dp[0][j] = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < amount + 1; j++) {
            if (coins[i] <= j) dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1);
            else dp[i][j] = dp[i - 1][j];
        }
    }
    return dp[n][amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[n][amount];
}

var coinChange = function (coins, amount) {
    // Tabulation
    return helper([, ...coins], amount);
};

// console.log(coinChange([1, 2, 3], 5));
// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2], 3));