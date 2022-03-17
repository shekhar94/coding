function recursive(root, p, q) {
    if (p.val < root.val && q.val < root.val) return recursive(root.left, p, q);
    if (p.val > root.val && q.val > root.val) return recursive(root.right, p, q);

    return root;
}
var lowestCommonAncestor = function (root, p, q) {
    return recursive(root, p, q);
};