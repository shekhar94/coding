function findMaxIdx(arr, s, e) {
    let maxIdx = s;
    for (let i = s; i <= e; i++) {
        if (arr[maxIdx] < arr[i]) maxIdx = i;
    }
    return maxIdx;
}

function recursion(root, arr, s, e) {
    const maxIdx = findMaxIdx(arr, s, e);
    root.val = arr[maxIdx];
    if (maxIdx - 1 >= s) {
        root.left = new TreeNode();
        recursion(root.left, arr, s, maxIdx - 1);
    }
    if (maxIdx + 1 <= e) {
        root.right = new TreeNode();
        recursion(root.right, arr, maxIdx + 1, e);
    }
}

var constructMaximumBinaryTree = function (nums) {
    const root = new TreeNode();
    recursion(root, nums, 0, nums.length - 1);
    return root;
};