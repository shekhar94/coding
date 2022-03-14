var invertTree = function (root) {
    if (!root) return root;

    const right = root.right;
    root.right = root.left;
    root.left = right;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};