// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function inOrder(root, arr) {
    if (!root) return;
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

function main() {
    const tree = new TreeNode(2,
        new TreeNode(1, null, null),
        new TreeNode(4,
            new TreeNode(3, null, null),
            new TreeNode(6, null, null)
        )
    );

    let arr = [];
    inOrder(tree, arr);

    let valid = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) valid = false;
    }

    return valid;
}

console.log(main());