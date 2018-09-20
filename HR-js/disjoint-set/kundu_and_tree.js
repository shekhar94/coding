/*jshint esversion:6*/
// https://www.hackerrank.com/challenges/kundu-and-tree/problem
// https://math.stackexchange.com/questions/838792/counting-triplets-with-red-edges-in-each-pair?newreg=60eee35f0b3844de852bda39f6dfec88
function main(input) {
    let ip_arr = input.split('\n'),
        N = Number(ip_arr[0]),
        arr = [],
        size_arr = [];

    init(arr, size_arr, N);
    for (let i = 0; i < N - 1; i++) {
        let edge = ip_arr[i + 1].split(' ');
        if (edge[2] === 'b') {
            weighted_union(arr, size_arr, Number(edge[0] - 1), Number(edge[1] - 1));
        }
        // console.log('arr => ', arr);
        // console.log('size_arr => ', size_arr);
        // console.log(temp_size);
    }
    let temp_size = find_connected(arr, N).join(' ');
    console.log(countTriplets(N, temp_size));
}

function countTriplets(N, size_arr) {
    let bad_triplets_count = 0;
    for (let i = 0; i < size_arr.length; i++) {
        let temp = (3 * N - 2 * size_arr[i] - 2);
        let temp1 = (size_arr[i] - 1);
        if (temp > 0 && temp1 > 0) {
            bad_triplets_count += size_arr[i] * (size_arr[i] - 1) * temp;
        }
    }
    let total_triplet = (N * (N - 1) * (N - 2));
    return Math.floor(((total_triplet - bad_triplets_count) / 6) % (1000000007));
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
    // console.log(disjoint_sets);
    let it = disjoint_sets.values();
    let size_arr = [];
    let pointer = it.next();
    while (!pointer.done) {
        size_arr.push(pointer.value);
        pointer = it.next();
    }
    return size_arr;
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
main("5\n1 2 b\n2 3 r\n3 4 r\n4 5 b");