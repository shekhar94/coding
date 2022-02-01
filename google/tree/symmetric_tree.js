// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
function inOrder(root, arr, left, right) {
    if (!root) return;
    inOrder(root.left, arr, true, false);
    arr.push({ val: root.val, left, right });
    inOrder(root.right, arr, false, true);
}


function isSymmetric(root, arr) {
    inOrder(root, arr, false, false);
    const len = arr.length;
    if (len % 2 === 0) return false;
    const mid = (len - 1) / 2;

    for (let i = 0; i < mid; i++) {
        const node1 = arr[i];
        const node2 = arr[len - 1 - i];
        if (node1.val !== node2.val || node1.left === node2.left || node1.right === node2.right)
            return false;
    }

    return true;
}


function main() {

    const tree = new TreeNode(1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2,
            new TreeNode(4),
            new TreeNode(3)
        )
    );

    const tree1 = new TreeNode(1,
        new TreeNode(2, new TreeNode(2)),
        new TreeNode(2,
            new TreeNode(2)
        )
    );

    const arr = [];
    console.log(isSymmetric(tree1, arr));

}

main();