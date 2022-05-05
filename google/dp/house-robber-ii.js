// Recursive Approach: TLE
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    function helper(i, arr) {
        if (i < 0) return 0;

        return Math.max(
            helper(i - 1, arr),
            arr[i] + helper(i - 2, arr)
        )
    }

    const arr1 = nums.slice(0, nums.length - 1);
    const arr2 = nums.slice(1, nums.length);
    const n = arr1.length - 1;
    return Math.max(helper(n, arr1), helper(n, arr2));
};


// Memoized Recursion
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    let dp1 = new Array(nums.length).fill(-1);
    let dp2 = [...dp1];
    function helper(i, arr, dp) {
        if (i < 0) return 0;
        if (dp[i] !== -1) return dp[i];

        return dp[i] = Math.max(
            helper(i - 1, arr, dp),
            arr[i] + helper(i - 2, arr, dp)
        )
    }

    const [arr1, arr2] = [nums.slice(0, nums.length - 1), nums.slice(1, nums.length)];
    const n = arr1.length - 1;
    return Math.max(helper(n, arr1, dp1), helper(n, arr2, dp2));
};

var rob = function (nums) {
    function helper(arr) {
        let rob1 = 0, rob2 = 0;
        for (let num of arr) {
            const tmp = Math.max(rob1 + num, rob2);
            rob1 = rob2;
            rob2 = tmp;
        }
        return rob2;
    }

    const [arr1, arr2] = [nums.slice(0, nums.length - 1), nums.slice(1, nums.length)];
    const n = arr1.length - 1;
    return Math.max(nums[0], helper(arr1), helper(arr2));
};

console.log(rob([2, 3, 2]));