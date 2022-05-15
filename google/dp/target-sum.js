var findTargetSumWays = function (nums, target) {
    // As the tgt can be negative 2d array will not work for caching
    const dp = new Map();

    function helper(idx, tgt) {
        if (tgt === 0 && idx === nums.length) return 1;
        if (idx === nums.length) return 0;

        const key = `${idx}-${tgt}`;
        if (dp.has(key)) return dp.get(key);

        let tmpWays = 0
        tmpWays += helper(idx + 1, tgt - nums[idx]);
        tmpWays += helper(idx + 1, tgt + nums[idx]);
        dp.set(key, tmpWays);
        return tmpWays;
    }
    return helper(0, target);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));