let res; // To store the final result
function dfs(root) {
    if (!root) return Number.MIN_SAFE_INTEGER;

    let leftMax = Math.max(dfs(root.left), 0); // if left max comes out negative use 0 instead
    let rightMax = Math.max(dfs(root.right), 0); // if right max comes out negative use 0 instead

    // At each node we have 2 choices
    // 1. Consider that node as a starting point and traverse in both directions get max and sum it up
    // 2. Current node is not starting point in that case we have to pick right or left direction
    // (left or right decided based on the val in each node)
    // split in both the directions from current node(In this case we are starting traversal from this node)
    res = Math.max(res, root.val + leftMax + rightMax);

    return root.val + Math.max(leftMax, rightMax); // Take one or the other path
}
var maxPathSum = function (root) {
    res = Number.MIN_SAFE_INTEGER;
    dfs(root);
    return res;
};