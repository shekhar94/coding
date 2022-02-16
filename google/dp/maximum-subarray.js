// https://leetcode.com/problems/maximum-subarray/

function kadanesAlgo(nums) {
    let max = nums[0];
    let foundMax = max;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max + nums[i], nums[i]);
        if (foundMax < max) foundMax = max;
    }
    return foundMax;
}


function main() {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    // const nums = [1];
    // const nums = [5, 4, -1, 7, 8];
    // const nums = [-2, 1];

    console.log(kadanesAlgo(nums));
}

main();