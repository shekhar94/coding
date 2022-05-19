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

// Space O(N) Time: O(N)
var isBalanced = function (root) {
    function helper(root) {
        if (!root) return [0, true];
        let l = helper(root.left);
        let r = helper(root.right);
        const bal = l[1] && r[1] && (Math.abs(l[0] - r[0]) <= 1);
        return [1 + Math.max(l[0], r[0]), bal];
    }
    return helper(root)[1];
}