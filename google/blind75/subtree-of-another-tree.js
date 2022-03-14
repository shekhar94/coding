function isSameTree(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;

    if (root1.val !== root2.val) return false;
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);

}
// For Each node check if tree rooted at that node is same as given sub tree
// O(N.M) where N: Number of nodes in root tree and M: Number of nodes in tree to be compared
var isSubtree = function (root, subRoot) {
    if (!root) return false;
    return isSameTree(root, subRoot) || isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot);

};