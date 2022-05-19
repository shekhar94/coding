var search = function (nums, target) {
    let [l, r] = [0, nums.length - 1];

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;

        // Left sorted arr
        if (nums[mid] >= nums[l]) {
            if (target < nums[l] || target > nums[mid]) {
                l = mid + 1;
            } else r = mid - 1;
        } else { // Right sorted arr
            if (target > nums[r] || target < nums[mid]) {
                r = mid - 1;
            } else l = mid + 1;
        }
    }
    return -1;
};