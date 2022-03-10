function inorder(arr, root) {
    if (!root) return;
    inorder(arr, root.left);
    arr.push(root.val);
    inorder(arr, root.right);
}

var kthSmallest = function (root, k) {
    let arr = [];
    inorder(arr, root);
    return arr[k - 1];
};