/*jshint esversion:6*/
// https://www.hackerearth.com/practice/data-structures/disjoint-data-strutures/basics-of-disjoint-data-structures/practice-problems/algorithm/count-friends/
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
    }
    console.log(find_connected(arr, size_arr, NM[0]));
}

function find_connected(arr, size_arr, N) {
    let friends = [];
    for (let i = 0; i < N; i++) {
        let root_i = root(arr, i);
        friends.push(size_arr[root_i] - 1);
    }
    return friends.join(' ');
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
main("4 3\n4 3\n2 4\n2 3");