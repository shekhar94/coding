/*jshint esversion:6*/
// https://www.hackerrank.com/challenges/merging-communities/problem
function main(input) {
    let ip_arr = input.split('\n'),
        NQ = ip_arr[0].split(' ').map(Number),
        N = NQ[0],
        Q = NQ[1],
        arr = [],
        size_arr = [];

    init(arr, size_arr, N);
    for (let i = 0; i < Q; i++) {
        let query = ip_arr[i + 1].split(' ');
        if (query[0] === 'M') {
            weighted_union(arr, size_arr, Number(query[1] - 1), Number(query[2] - 1));
        } else {
            console.log(getSize(arr, size_arr, query[1] - 1));
        }
    }
}

function getSize(arr, size_arr, i) {
    let root_i = root(arr, i);
    return size_arr[root_i];
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
main("3 6\nQ 1\nM 1 2\nQ 2\nM 2 3\nQ 3\nQ 2");