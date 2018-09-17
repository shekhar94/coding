/*jshint esversion:6*/

function main(input) {
    let ip_arr = input.split('\n'),
        NM = ip_arr[0].split(' ').map(Number),
        arr = [],
        size_arr = [],
        deleted = {};

    init(arr, size_arr, NM[0]);
    for (let i = 0; i < NM[1]; i++) {
        let edge = ip_arr[i + 1].split(' ').map(Number);
        weighted_union(arr, size_arr, edge[0] - 1, edge[1] - 1);
        console.log('arr => ', arr);
        console.log('size_arr => ', size_arr);
        let temp_size = find_connected(arr, NM[0]);
        // let temp_size = size_arr.slice();
        // delete temp_size[edge[0] - 1];
        console.log(temp_size);
        // process.stdout.write(temp_size[edge[0] - 1]);
        // process.stdout.write('\n');
    }
}

function find_connected(arr, N) {
    let disjoint_sets = new Map();
    let visited = new Map();
    for (let i = 0; i < N; i++) {
        if (visited.has(i)) continue;
        if (disjoint_sets.has(arr[i]))
            disjoint_sets.set(arr[i], disjoint_sets.get(arr[i]) + 1);
        else disjoint_sets.set(arr[i], 1);
        visited.set(i, true);
    }
    let size_arr = [];
    let it = disjoint_sets.values();
    while (!it.next().done) size_arr.push(it.next().value)
    return size_arr.sort();
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
main("5 4\n1 2\n3 4\n4 5\n1 3");