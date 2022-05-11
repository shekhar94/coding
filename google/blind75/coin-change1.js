// Based on unbounded knapsack
var coinChange = function (coins, amount) {
    let dp = new Array(coins.length).fill(-1).map(() => new Array(amount + 1).fill(-1));

    function helper(idx, wt) {
        if (wt === 0) return 0;
        if (wt < 0) return Number.MAX_SAFE_INTEGER;
        if (dp[idx][wt] !== -1) return dp[idx][wt];

        let p = Number.MAX_SAFE_INTEGER;
        for (let i = idx; i < coins.length; i++) {
            p = Math.min(p, 1 + helper(idx, wt - coins[i]));
        }
        return dp[idx][wt] = p;
    }

    const count = helper(0, amount);
    return count === Number.MAX_SAFE_INTEGER ? -1 : count;
};

console.log(coinChange([1, 2, 5], 11));