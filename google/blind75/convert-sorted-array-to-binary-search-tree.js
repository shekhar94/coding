function helper(left, right, nums) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.val = nums[mid];

    node.left = helper(left, mid - 1, nums);
    node.right = helper(mid + 1, right, nums);
    return node;
}


var sortedArrayToBST = function (nums) {
    return helper(0, nums.length - 1, nums);
};