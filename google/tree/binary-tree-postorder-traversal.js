var postorderTraversal = function (root) {
    const res = [];
    function post(node) {
        if (!node) return;
        post(node.left);
        post(node.right);
        res.push(node.val);
    }
    post(root);
    return res;
};