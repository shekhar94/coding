// https://leetcode.com/problems/search-in-rotated-sorted-array/

// To find the pivot index for rotation
function bSearch(arr, s, e) {
    if (s > e) return -1;
    const mid = Math.floor((s + e) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else return Math.max(bSearch(arr, s, mid - 1), bSearch(arr, mid + 1, e));
}


// normal binary search to apply on both sides of pivot index
function binarySearch(arr, target, i, j) {
    let s = i, e = j;
    while (s <= e) {
        const mid = Math.floor((s + e) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) s = mid + 1;
        else e = mid - 1;
    }
    return -1;
}


function search(nums, target) {
    const rotIndex = bSearch(nums, 0, nums.length - 1);
    if (rotIndex !== -1) { // nums is rotated
        const targetIndex = Math.max(
            binarySearch(nums, target, 0, rotIndex - 1),
            binarySearch(nums, target, rotIndex, nums.length - 1)
        );
        return targetIndex;
    } else return binarySearch(nums, target, 0, nums.length - 1); // there is no effective rotation
}

function main() {
    // const nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
    // const nums = [4, 5, 6, 7, 0, 1, 2], target = 3;
    // const nums = [1], target = 0;
    // const nums = [1], target = 1;
    const nums = [1, 2, 4, 6], target = 1;
    console.log(search(nums, target));
}

main();