// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function maxDepthTreeNode(root) {
    if (!root) return 0;

    let leftHeight = 0, rightHeight = 0;
    const leftChild = root.left;
    const rightChild = root.right;

    if (leftChild) leftHeight = maxDepthTreeNode(leftChild)
    if (rightChild) rightHeight = maxDepthTreeNode(rightChild);
    return 1 + Math.max(leftHeight, rightHeight);
}

function main() {
    const tree = new TreeNode(3,
        new TreeNode(9, null, null),
        new TreeNode(20,
            new TreeNode(15, null, null),
            new TreeNode(7, null, null)
        )
    );
    console.log(maxDepthTreeNode(tree));
}

main();
