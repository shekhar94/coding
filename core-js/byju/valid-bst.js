// https://leetcode.com/problems/validate-binary-search-tree/

function in_order_traversal(root, arr) {
    if (!root) return;
    in_order_traversal(root.left, arr);
    arr.push(root.val);
    // console.log(root.val);
    in_order_traversal(root.right, arr);
}
function checkSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}
function main() {
    const tree = {
        root: {
            val: 10,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 15,
                left: {
                    val: 6,
                    left: null,
                    right: null
                },
                right: {
                    val: 20,
                    left: null,
                    right: null
                }
            }
        }
    };
    const traversal = [];
    in_order_traversal(tree.root, traversal);
    console.log(checkSorted(traversal));
}
main();




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function in_order_traversal(root, arr) {
    if (!root) return;
    in_order_traversal(root.left, arr);
    arr.push(root.val);
    // console.log(root.val);
    in_order_traversal(root.right, arr);
}
function checkSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) {
            return false;
        }
    }
    return true;
}
var isValidBST = function (root) {
    const traversal = [];
    in_order_traversal(root, traversal);
    return checkSorted(traversal);
};
