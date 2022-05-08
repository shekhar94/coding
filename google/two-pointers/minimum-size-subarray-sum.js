var minSubArrayLen = function (target, nums) {
    let [len, sum, i, minLen] = [nums.length, 0, 0, Number.MAX_SAFE_INTEGER];

    for (let j = 0; j < len; j++) {
        sum += nums[j];
        while (sum >= target) {
            minLen = Math.min(minLen, j - i + 1);
            sum -= nums[i];
            i++;
        }
    }
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));