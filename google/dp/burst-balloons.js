var maxCoins = function (nums) {
    function getCoins(nums, i) {
        let prev = i > 0 ? nums[i - 1] : 1;
        let next = i < nums.length - 1 ? nums[i + 1] : 1;
        return prev * nums[i] * next;
    }
    function helper(nums) {
        if (nums.length === 0) return 0;
        let res = 0;

        for (let i = 0; i < nums.length; i++) {
            const coins = getCoins(nums, i);
            const num = nums.splice(i, 1);
            res = Math.max(res, coins + helper([...nums]));
            nums.splice(i, 0, num);
        }
        return res;
    }
    return helper(nums);
};

// Time O(n^3)
// Space: O(n^2)
var maxCoins = function (nums) {
    nums = [1, ...nums, 1];
    const dp = new Array(nums.length).fill(-1).map(() => new Array(nums.length).fill(-1));

    function dfs(l, r) {
        if (l > r) return 0;
        if (dp[l][r] !== -1) return dp[l][r];

        dp[l][r] = 0;
        for (let i = l; i < r + 1; i++) {
            let coins = nums[l - 1] * nums[i] * nums[r + 1];
            coins += dfs(l, i - 1) + dfs(i + 1, r);
            dp[l][r] = Math.max(dp[l][r], coins);
        }
        return dp[l][r];
    }
    return dfs(1, nums.length - 2);
}