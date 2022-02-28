let max;

function diameter(root) {
    if (!root) return 0;

    let leftH = 0;
    if (root.left) leftH = 1 + diameter(root.left); // find max height of left subtree

    let rightH = 0;
    if (root.right) rightH = 1 + diameter(root.right); // find max height of right subtree

    if (max < leftH + rightH) max = leftH + rightH; // to track max height found till 
    return Math.max(leftH, rightH);
}

var diameterOfBinaryTree = function (root) {
    max = 0;
    diameter(root);
    return max;
};