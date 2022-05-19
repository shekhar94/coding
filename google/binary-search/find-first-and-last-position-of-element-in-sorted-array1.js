var searchRange = function (nums, target) {
    function binarySearchStart(l, r) {
        if (l > r) return -1;
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target &&
            ((mid > 0 && nums[mid - 1] < target) || mid === 0)) return mid;

        if (nums[mid] >= target) return binarySearchStart(l, mid - 1); // nums[mid] >= target searching left side
        else return binarySearchStart(mid + 1, r);
    }

    function binarySearchEnd(l, r) {
        if (l > r) return -1;
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target && (mid === nums.length - 1 ||
            (mid < nums.length - 1 && nums[mid + 1] > target))) return mid;

        if (nums[mid] > target) return binarySearchEnd(l, mid - 1);
        else return binarySearchEnd(mid + 1, r); // nums[mid] <= target searching right side
    }
    return [binarySearchStart(0, nums.length - 1), binarySearchEnd(0, nums.length - 1)];
};