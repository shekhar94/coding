function dfs(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;

    if (root1.val !== root2.val) return false;
    return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);

}
var isSameTree = function (p, q) {
    return dfs(p, q);
};