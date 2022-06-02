var preorderTraversal = function (root) {
    const res = [];
    function pre(node) {
        if (!node) return;
        res.push(node.val);
        pre(node.left);
        pre(node.right);
    }
    pre(root);
    return res;
};