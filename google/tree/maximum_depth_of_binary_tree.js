// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// accepted solution
function maxDepthTreeNode(root) {

    if (!root) return 0;

    let leftHeight = 0, rightHeight = 0;
    const leftChild = root.left;
    const rightChild = root.right;

    if (leftChild) {
        leftHeight = maxDepthTreeNode(leftChild)
    }

    if (rightChild) {
        rightHeight = maxDepthTreeNode(rightChild);
    }

    return 1 + Math.max(leftHeight, rightHeight);
}

function main() {
    // const tree = [3, 9, 20, null, null, 15, 7];
    // const tree = [1, null, 2];

    const tree = new TreeNode(3,
        new TreeNode(9, null, null),
        new TreeNode(20,
            new TreeNode(15, null, null),
            new TreeNode(7, null, null)
        )
    );


    // const tree = [];
    // const root = 0;
    console.log(maxDepthTreeNode(tree));
}

main();


// function maxDepth(tree, root) {
//     const len = tree.length;

//     if (root > len - 1) return 0;

//     let leftHeight = 0, rightHeight = 0;
//     const leftChild = 2 * root + 1;
//     // console.log('leftChild: ', leftChild);
//     const rightChild = 2 * root + 2;
//     // console.log('rightChild: ', rightChild);

//     if (leftChild <= len - 1 && tree[leftChild] !== null) {
//         leftHeight = maxDepth(tree, leftChild)
//         // console.log('leftHeight: ', leftHeight);
//     }

//     if (rightChild <= len - 1 && tree[rightChild] !== null) {
//         rightHeight = maxDepth(tree, rightChild);
//         // console.log('rightHeight: ', rightHeight);
//     }

//     return 1 + Math.max(leftHeight, rightHeight);
// }
