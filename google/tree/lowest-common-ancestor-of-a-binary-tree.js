// Time O(N)
function dfs(root, p, q) {
    if (!root) return;
    if (root === p || root === q) return root;
    let left = dfs(root.left, p, q);
    let right = dfs(root.right, p, q);
    if (left && right) return root;
    return left || right;
}

var lowestCommonAncestor = function (root, p, q) {
    return dfs(root, p, q);
};