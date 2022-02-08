// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// To find the first position
function findStartingPos(nums, target) {
    let s = 0, e = nums.length - 1;

    while (s <= e) {
        const mid = Math.floor((s + e) / 2);

        if (mid > 0 && nums[mid] === target && nums[mid - 1] < nums[mid]) return mid;
        else if (mid === 0 && nums[mid] === target) return mid;
        else if (nums[mid] < target) s = mid + 1;
        else e = mid - 1;
    }

    return -1;
}

// To find the last position
function findEndingPos(nums, target) {
    let s = 0, e = nums.length - 1;

    while (s <= e) {
        const mid = Math.floor((s + e) / 2);

        if (mid < nums.length - 1 && nums[mid] === target && nums[mid + 1] > nums[mid]) return mid;
        else if (mid === nums.length - 1 && nums[mid] === target) return mid;
        else if (nums[mid] > target) e = mid - 1;
        else s = mid + 1;
    }
    return -1;
}

function main() {
    // const nums = [5, 7, 7, 8, 8, 10], target = 8;
    // const nums = [5, 7, 7, 8, 8, 10], target = 6;
    // const nums = [], target = 0;
    const nums = [2, 2], target = 2;
    console.log([findStartingPos(nums, target), findEndingPos(nums, target)]);
}

main();