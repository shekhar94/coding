var findNumberOfLIS = function (nums) {
    const len = nums.length;
    let dp = [];
    let [maxLIS, maxCount] = [0, 0];

    for (let i = len - 1; i > -1; i--) {
        let [lisLen, count] = [1, 1];
        for (let j = i + 1; j < len; j++) {
            if (nums[j] > nums[i]) { // increasing subsequence
                const [l, c] = dp[j];
                if (lisLen < 1 + l) [lisLen, count] = [1 + l, c];
                else if (lisLen === 1 + l) count += c;
            }
        }

        dp[i] = [lisLen, count];
        const [l, c] = dp[i];
        if (maxLIS < l) [maxLIS, maxCount] = [l, c];
        else if (maxLIS === l) maxCount += c;
    }

    return maxCount;
};

// console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));