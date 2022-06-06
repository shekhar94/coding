var convertBST = function (root) {
    let sum = 0;
    function rvl(node) {
        if (!node) return;
        rvl(node.right);
        node.val += sum;
        sum = node.val;
        rvl(node.left);
    }
    rvl(root);
    return root;
};