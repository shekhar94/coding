var search = function (nums, target) {
    let [l, r] = [0, nums.length - 1];

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
};