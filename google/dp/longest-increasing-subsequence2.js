var lengthOfLIS = function (nums) {
    let len = nums.length;
    let LIS = new Array(len).fill(1);

    for (let i = len - 1; i > -1; --i) {
        for (let j = i; j < len; j++) {
            if (nums[i] < nums[j] && LIS[i] < 1 + LIS[j]) {
                LIS[i] = 1 + LIS[j];
            }
        }
    }

    return Math.max(...LIS);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));