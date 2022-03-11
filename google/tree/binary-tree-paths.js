let res;
function recursive(root, str) {
    if (!root.left && !root.right) {
        return res.push(str);
    };
    if (root.left) recursive(root.left, `${str}->${root.left.val}`);
    if (root.right) recursive(root.right, `${str}->${root.right.val}`);

}
var binaryTreePaths = function (root) {
    res = [];
    recursive(root, `${root.val}`);
    return res;
};