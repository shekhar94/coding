// https://leetcode.com/problems/find-peak-element/
function binarySearch(nums, s, e) {
    if (s > e) return;
    const mid = Math.floor((s + e) / 2);
    const leftI = mid - 1;
    const rightI = mid + 1;

    if (
        (leftI >= 0 && rightI <= nums.length &&
            nums[mid] > nums[rightI] &&
            nums[mid] > nums[leftI]) ||  // mid falls between two valid indices
        (leftI < 0 && nums[rightI] < nums[mid]) || // mid falls between invalid left valid right indices
        (rightI === nums.length && nums[leftI] < nums[mid]) || // mid falls between invalid right valid left indices
        (leftI < 0 && rightI === nums.length) // mid falls between invalid left and invalid right indices
    ) return mid;
    else {
        const left = binarySearch(nums, s, mid - 1);
        if (left || left === 0) return left;
        const right = binarySearch(nums, mid + 1, e);
        if (right || right === 0) return right;
    }
}

function findPeakElement(nums) {
    return binarySearch(nums, 0, nums.length - 1);
}

function main() {
    const nums = [1, 2, 3, 1];
    // const nums = [1, 2, 1, 3, 5, 6, 4];
    // const nums = [1];
    // const nums = [1, 2, 1];
    // const nums = [3, 2, 1];
    console.log(findPeakElement(nums));
}

main();