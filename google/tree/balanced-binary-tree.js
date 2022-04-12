let isBal;

function helper(root) {
    if (!root) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    if (Math.abs(left - right) > 1) isBal = false;
    return 1 + Math.max(left, right);
}

var isBalanced = function (root) {
    isBal = true;
    helper(root);
    return isBal;
};