// Approach 1
var sumNumbers = function (root) {
    let sum = 0;

    function dfs(node, arr) {
        if (!node.left && !node.right) {
            sum += parseInt(arr.join(''));
            return;
        }
        if (node.left) dfs(node.left, [...arr, node.left.val]);
        if (node.right) dfs(node.right, [...arr, node.right.val]);
    }
    dfs(root, [root.val]);
    return sum;
};

// Approach 2
var sumNumbers = function (root) {
    function dfs(node, n) {
        if (!node) return 0;
        n = 10 * n + node.val;
        if (!node.left && !node.right) return n;
        return dfs(node.left, n) + dfs(node.right, n);
    }
    return dfs(root, 0);
};