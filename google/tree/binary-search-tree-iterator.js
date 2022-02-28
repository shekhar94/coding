/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
let sorted = [];

function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    sorted.push(root.val);
    inOrder(root.right);
}

var BSTIterator = function (root) {
    sorted = [];
    inOrder(root);
    sorted.reverse();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const val = sorted.pop();
    return val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    if (sorted.length > 0) return true;
    return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */