function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let map;
function helper(root, x, y) {
    if (!root) return;

    if (!map.has(y)) map.set(y, []);
    map.get(y).push([x, y, root.val]);

    helper(root.left, x + 1, y - 1);
    helper(root.right, x + 1, y + 1);

}

function verticalTraversal(root) {
    map = new Map();
    helper(root, 0, 0);

    const sortedKeys = [...map.keys()].sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < sortedKeys.length; i++) {
        res.push(map.get(sortedKeys[i])
            .sort((a, b) => a[0] - b[0] === 0 ? a[2] - b[2] : a[0] - b[0])
            .map(val => val[2]));
    }
    return res;
}

function main() {
    const root = new TreeNode(1,
        new TreeNode(2,
            new TreeNode(4),
            new TreeNode(6)
        ),
        new TreeNode(3,
            new TreeNode(5),
            new TreeNode(7)
        ))
    console.log(verticalTraversal(root));
}

main();