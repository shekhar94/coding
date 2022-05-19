var minCostClimbingStairs = function (cost) {
    const dp1 = new Array(cost.length).fill(-1);
    const dp2 = new Array(cost.length).fill(-1);
    function dfs(idx, dp) {
        if (idx >= cost.length) return 0;
        if (dp[idx] !== -1) return dp[idx];

        return dp[idx] = cost[idx] + Math.min(
            dfs(idx + 1, dp),
            dfs(idx + 2, dp)
        )
    }
    return Math.min(dfs(0, dp1), dfs(1, dp2));
};

// Approach 2
var minCostClimbingStairs = function (cost) {
    cost.push(0);
    for (let i = cost.length - 3; i > -1; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
}