var change = function (amount, coins) {
    const dp = new Array(coins.length).fill(-1).map(() => new Array(amount + 1).fill(-1));
    function helper(idx, wt) {
        if (wt === 0) return 1;
        if (wt < 0) return 0;
        if (dp[idx][wt] !== -1) return dp[idx][wt];

        let ways = 0
        for (let i = idx; i < coins.length; i++) {
            ways += helper(i, wt - coins[i]);
        }
        return dp[idx][wt] = ways;
    }

    return helper(0, amount);
};

console.log(change(5, [1, 2, 5]));