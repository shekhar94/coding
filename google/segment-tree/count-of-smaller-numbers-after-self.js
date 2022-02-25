// To store the segment tree
// Each node in tree gives the count of numbers in the range
// (1,5) -> would represent the count of numbers in between 1 and 5 inclusive
let tree = [];

function updateTree(node, start, end, val) {
    if (start === end) {
        // If a node with undefined value found update it to 0
        if (!tree[node]) tree[node] = 0; // As there is no initialization of tree before
        tree[node] += 1; // update the count for current node
    } else {
        const mid = Math.floor((start + end) / 2);
        if (val >= start && val <= mid) updateTree(2 * node, start, mid, val); // continue traversing left subtree to find val
        else updateTree(2 * node + 1, mid + 1, end, val); // continue traversing right subtree to find val
        tree[node] = (tree[2 * node] || 0) + (tree[2 * node + 1] || 0); // total count for current node would be sum of counts in left and right subtree
    }
}

function queryTree(node, start, end, l, r) {
    if (r < start || l > end) return 0; // out of range
    if (l <= start && r >= end) return tree[node]; // total overlap (this can return undefined sometimes)
    const mid = Math.floor((start + end) / 2);
    const p1 = queryTree(2 * node, start, mid, l, r);
    const p2 = queryTree(2 * node + 1, mid + 1, end, l, r);
    return (p1 || 0) + (p2 || 0); // If any of p1 or p2 is undefined then default to zero
}

function findMaxMin(arr) {
    return arr.reduce((acc, item) => {
        if (item > acc.max) acc.max = item;
        if (item < acc.min) acc.min = item;
        return acc;
    }, { max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER })
}

function countSmaller(arr) {
    // scale up the numbers to bring everything in +ve range
    arr = arr.map(num => num + (10 ** 4 + 1));
    const { max, min } = findMaxMin(arr);
    const res = Array(arr.length);
    tree = [];
    for (let i = arr.length - 1; i >= 0; i--) { // Traverse from left to right
        updateTree(min, min, max, arr[i]); // update the seg tree for each node 
        res[i] = queryTree(min, min, max, min, arr[i] - 1); // query after adding the current number
    }
    return res;
}

function main() {
    // const nums = [5, 2, 6, 1];
    // const nums = [-1, -1];
    // const nums = [-1];
    // let nums = [12, 1, 2, 3, 0, 11, 4];
    // let nums = [5, 4, 3, 2, 1];
    let nums = [1, 2, 3, 4, 5, 4, 4];

    console.log(countSmaller(nums));
}

main();