let prevElem; // stores the previous element of inorder traversal
let min; // stores the result
// In order traversal of BST gives sorted elements
// min diff is always going to be between two adjacent elements in a sorted array
// We update the min if absolute diff between prevElem and current elem is smaller than min
function inOrder(root) {
    if (!root) return;

    inOrder(root.left);
    if (prevElem !== null)
        min = Math.min(Math.abs(root.val - prevElem), min);
    prevElem = root.val;
    inOrder(root.right);
}

var getMinimumDifference = function (root) {
    prevElem = null;
    min = 10 ** 5 + 1;
    inOrder(root);
    return min;
};