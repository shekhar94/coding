/*jshint esversion:6*/
// https://www.hackerrank.com/challenges/maximum-cost-queries/problem
function main(input) {
    let ip_arr = input.split('\n'),
        NQ = ip_arr[0].split(' ').map(Number),
        N = NQ[0],
        Q = NQ[1],
        arr = [],
        size_arr = [];

    init(arr, size_arr, NM[0]);
    for (let i = 0; i < N - 1; i++) {
        let edge = ip_arr[i + 1].split(' ').map(Number),
            weight = edge[2];
        weighted_union(arr, size_arr, edge[0] - 1, edge[1] - 1);
        // console.log('arr => ', arr);
        // console.log('size_arr => ', size_arr);
        let temp_size = find_connected(arr, NM[0]).join(' ');
        console.log(temp_size);
    }
}

function find_connected(arr, N) {
    let disjoint_sets = new Map();
    let visited = new Map();
    for (let i = 0; i < N; i++) {
        if (visited.has(i)) continue;
        visited.set(i, true);
        let root_i = root(arr, i);
        if (disjoint_sets.has(root_i)) {
            disjoint_sets.set(root_i, disjoint_sets.get(root_i) + 1);
        } else {
            disjoint_sets.set(root_i, 1);
        }
    }
    let it = disjoint_sets.values();
    let size_arr = [];
    let pointer = it.next();
    while (!pointer.done) {
        size_arr.push(pointer.value);
        pointer = it.next();
    }
    return size_arr.sort((a, b) => a - b);
}

function init(arr, size_arr, N) {
    for (let i = 0; i < N; i++) {
        arr.push(i);
        size_arr.push(1);
    }
}

function root(arr, i) {
    while (arr[i] !== i) {
        arr[i] = arr[arr[i]];
        i = arr[i];
    }
    return i;
}

function find(arr, a, b) {
    if (arr[a] === arr[b]) return true;
    return false;
}

function weighted_union(arr, size_arr, a, b) {
    let root_a = root(arr, a);
    let root_b = root(arr, b);
    if (root_a === root_b) return;
    if (size_arr[root_a] > size_arr[root_b]) {
        arr[root_b] = arr[root_a];
        size_arr[root_a] += size_arr[root_b];
    } else {
        arr[root_a] = arr[root_b];
        size_arr[root_b] += size_arr[root_a];
    }
}
main("5 5\n1 2 3\n1 4 2\n2 5 6\n3 4 1\n1 1\n1 2\n2 3\n2 5\n1 6");