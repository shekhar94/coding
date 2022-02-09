// https://leetcode.com/problems/closest-binary-search-tree-value/submissions/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function find(root, target, closest) {
    if (!root) return closest;
    if (closest === -1) closest = root.val;
    else if (Math.abs(closest - target) > Math.abs(root.val - target)) closest = root.val;
    if (root.val < target) return find(root.right, target, closest);
    else return find(root.left, target, closest);
}

function closestValue(root, target) {
    return find(root, target, -1);
}

function main() {
    const target = 3.714286;
    const root = new TreeNode(4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(5)
    );
    console.log(closestValue(root, target));
}

main();