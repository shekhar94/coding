var goodNodes = function (root) {
    let res = 0;
    function dfs(node, prev) {
        if (!node) return;

        if (node.val >= prev) res++;
        prev = Math.max(node.val, prev);

        dfs(node.left, prev);
        dfs(node.right, prev);
    }

    dfs(root, Number.MIN_SAFE_INTEGER);
    return res;
};