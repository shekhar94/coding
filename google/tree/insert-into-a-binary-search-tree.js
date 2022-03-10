var insertIntoBST = function (root, val) {
    let tmp = root;
    const newNode = new TreeNode(val);
    if (!root) return newNode;
    while (true) {
        if (tmp.val > val) {
            if (!tmp.left) {
                tmp.left = newNode;
                break;
            } else tmp = tmp.left;
        } else {
            if (!tmp.right) {
                tmp.right = newNode;
                break;
            } else tmp = tmp.right;
        }
    }
    return root;
};