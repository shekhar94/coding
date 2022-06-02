var minDiffInBST = function (root) {
    let arr = [];
    function inOrder(node) {
        if (!node) return;
        inOrder(node.left);
        arr.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, Math.abs(arr[i - 1] - arr[i]));
    }
    return min;
};