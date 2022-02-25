// https://leetcode.com/problems/maximum-product-subarray/submissions/

function maxProduct(arr) {
    if (arr.length === 1) return arr[0]; // If there is only one element return that
    // Init the min max array with first value
    // min[i] holds: min product ending at i
    // max[i] holds: max product ending at i
    const min = [arr[0]];
    const max = [arr[0]];
    // Init maxTill: Holds max product found till current index
    let maxTill = Math.max(min[0], max[0]);
    for (let i = 1; i < arr.length; i++) {
        min[i] = Math.min(arr[i], min[i - 1] * arr[i], max[i - 1] * arr[i]);
        max[i] = Math.max(arr[i], min[i - 1] * arr[i], max[i - 1] * arr[i]);
        // update maxTill if required
        if (min[i] > maxTill) maxTill = min[i];
        if (max[i] > maxTill) maxTill = max[i];
    }
    return maxTill;
}

function main() {
    const nums = [2, 3, -2, 4];
    // const nums = [-2, 0, -1];
    console.log(maxProduct(nums))
}

main();