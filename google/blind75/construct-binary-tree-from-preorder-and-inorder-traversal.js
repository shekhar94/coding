

var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const val = preorder[0];
    const rootIdx = inorder.findIndex(item => item === val);
    const root = new TreeNode(val);
    root.left = buildTree(preorder.slice(1, 1 + rootIdx), inorder.slice(0, rootIdx));
    root.right = buildTree(preorder.slice(rootIdx + 1), inorder.slice(rootIdx + 1));
    return root;
};