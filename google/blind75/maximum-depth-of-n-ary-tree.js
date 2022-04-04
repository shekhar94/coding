function helper(node) {
    if (!node) return 0;

    let maxDepth = 0;
    for (let child of node.children) {
        maxDepth = Math.max(helper(child), maxDepth);
    }

    return maxDepth + 1;
}

var maxDepth = function (root) {
    return helper(root);
};