var maxProfit = function (prices) {
    const dp = new Array(prices.length).fill('e').map(() => new Array(2).fill('e'));
    function helper(idx, buy) {
        if (idx >= prices.length) return 0;
        if (dp[idx][buy] !== 'e') return dp[idx][buy];

        let subRes = 0;
        if (buy === 0) subRes = helper(idx + 1, 1) - prices[idx];
        else subRes = helper(idx + 2, 0) + prices[idx];

        return dp[idx][buy] = Math.max(subRes, helper(idx + 1, buy));
    }
    return helper(0, 0);
};