// https://leetcode.com/problems/range-sum-query-mutable/
// Finish this: not yet submitted
// This sol is not working

let tree = [];

function build(node, arr, s, e) {
    if (s === e) tree[node] = arr[s];
    else {
        let mid = Math.floor((s + e) / 2);
        build(2 * node + 1, arr, s, mid);
        build(2 * node + 2, arr, mid + 1, e);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }
}
let set = new Set()


function update(node, s, e, val) {
    if (s === e) tree[node] = val;
    else {
        let mid = Math.floor((s + e) / 2);
        if (val >= s && val <= mid) update(2 * node, s, mid, val);
        else update(2 * node + 1, s, mid, val);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }
}

function findMaxMin(arr) {
    return arr.reduce((acc, item) => {
        if (item > acc.max) acc.max = item;
        if (item < acc.min) acc.min = item;
        return acc;
    }, { max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER })
}

function query(node, s, e, l, r) { // query range l,r
    // console.log('s, e, l, r: ', s, e, l, r);
    if (r < s || l > e) return 0;
    if (l <= s && r >= e) return tree[node] || 0;

    let mid = Math.floor((s + e) / 2);
    let p1 = query(2 * node, s, mid, l, r);
    let p2 = query(2 * node + 1, mid + 1, e, l, r);
    return (p1 || 0) + (p2 || 0);
}

function init() {
    const operations = ["NumArray", "sumRange", "update", "sumRange"]
    const data = [[1, 3, 5], [0, 2], [1, 2], [0, 2]];
    const res = [];
    let max = 10 ** 4, min = -(10 ** 4);
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        const arr = data[i];
        if (operation === "NumArray") {
            max = Math.max(max, ...arr);
            min = Math.min(min, ...arr);
            build(0, arr, 0, arr.length)
            console.log(tree);
            res.push(null);
        }
        if (operation === "sumRange") {
            const [l, r] = operation;
            const [s, e] = [0, 10 ** 4 + 2];
            const sum = query(0, s, e, min, max)
            res.push(sum);
        }

        if (operation === "update") {
            res.push(null);
        }
    }
    arr = arr.map(num => num + (10 ** 4 + 1));
    tree = [];
}

function main() {
    console.log(init());
}

main();



