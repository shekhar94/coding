// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Use only one of the findPivot
function findPivot(nums, s, e) {
    if (s > e) return -1;
    const mid = Math.floor((s + e) / 2);
    if (nums[mid] > nums[mid + 1]) return mid;
    else return Math.max(findPivot(nums, s, mid - 1), findPivot(nums, mid + 1, e));
}

// findPivot More optimized code
function findPivot(nums, s, e) {
    if (s > e) return -1;
    const mid = Math.floor((s + e) / 2);
    if (nums[mid] > nums[mid + 1]) return mid;
    else {
        const pivot1 = findPivot(nums, s, mid - 1);
        if (pivot1 !== -1) return pivot1;
        const pivot2 = findPivot(nums, mid + 1, e); // avoid running this if result found in pivot1
        if (pivot2 !== -1) return pivot2;
        return -1;
    }
}


function findMin(nums) {
    const pivotI = findPivot(nums, 0, nums.length - 1);
    return nums[pivotI + 1];
}

function main() {
    const nums = [3, 4, 5, 1, 2];
    // const nums = [4, 5, 6, 7, 0, 1, 2];
    // const nums = [11, 13, 15, 17];
    console.log(findMin(nums));
}

main();