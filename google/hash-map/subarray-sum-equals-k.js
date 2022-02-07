// https://leetcode.com/problems/subarray-sum-equals-k/
function prefixSum(arr) {
    const pSum = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) pSum[i] = arr[i];
        else {
            pSum[i] = arr[i] + pSum[i - 1];
        }
    }
    return pSum;
}

function subarraySum(nums, k) {
    const map = new Map();
    const pSum = prefixSum(nums);
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const reqSum = pSum[i] - k;
        if (reqSum === 0) count++;
        if (map.has(reqSum)) {
            count += map.get(reqSum);
        }
        if (!map.has(pSum[i])) {
            map.set(pSum[i], 0);
        }
        map.set(pSum[i], map.get(pSum[i]) + 1);
    }
    return count;
}

function main() {
    // const nums = [1, 2, 3], k = 3;
    // const nums = [1, 1, 1], k = 2;
    const nums = [1, -1, 0], k = 0;
    console.log(subarraySum(nums, k));
}

main();