var inorderTraversal = function (root) {
    const res = [];
    function inOrder(node) {
        if (!node) return;
        inOrder(node.left);
        res.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    return res;
};