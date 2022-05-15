var maxAlternatingSum = function (nums) {
    const dp = new Array(nums.length).fill(-1).map(() => new Array(2).fill(-1));

    function dfs(idx, oddOrEven) {
        if (idx === nums.length) return 0;
        if (dp[idx][oddOrEven] !== -1) return dp[idx][oddOrEven];

        let subRes;
        if (oddOrEven === 0) subRes = dfs(idx + 1, 1) + nums[idx];   // Even index in subsequence
        else subRes = dfs(idx + 1, 0) - nums[idx]; // Odd index in subsequence

        return dp[idx][oddOrEven] = Math.max(subRes, dfs(idx + 1, oddOrEven));
    }

    return dfs(0, 0);
};
console.log(maxAlternatingSum([4, 2, 5, 3]));