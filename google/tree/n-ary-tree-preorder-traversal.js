var preorder = function (root) {
    const res = [];
    function pre(node) {
        if (!node) return;
        res.push(node.val);
        for (let child of node.children) {
            pre(child);
        }
    }
    pre(root);
    return res;
};