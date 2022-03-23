// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/1876506/Javascript-or-Preorder-Traversal-or-Recursive-or-O(N)
var serialize = function (root) {
    function preOrder(node) {
        if (!node) {
            tree.push(null); return;
        }
        tree.push(node.val)
        preOrder(node.left);
        preOrder(node.right);
    }
    const tree = [];
    preOrder(root);
    return JSON.stringify(tree);
};


var deserialize = function (data) {
    const tree = JSON.parse(data);
    let i = 0;

    function buildTree() {
        if (tree[i] === null) {
            i++;
            return null;
        }
        let node = new TreeNode(tree[i]);
        i++;
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
};