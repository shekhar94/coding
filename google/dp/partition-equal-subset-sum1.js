var canPartition = function (nums) {
    const totalSum = nums.reduce((acc, item) => acc + item, 0);
    if (totalSum % 2) return false;
    const target = totalSum / 2;
    const dp = new Array(nums.length).fill(-1).map(() => new Array(target + 1).fill(-1));

    function dfs(idx, target) {
        if (target === 0) return true;
        if (target < 0) return false;
        if (dp[idx][target] !== -1) return dp[idx][target];

        for (let i = idx + 1; i < nums.length; i++) {
            if (dfs(i, target - nums[idx]) || dfs(i, target)) return true;
        }
        return dp[idx][target] = false;
    }
    return dfs(0, target);
};