/*jshint esversion:6*/
// https://www.hackerrank.com/challenges/equal/problem
// Author: Shekhar Suman 11/06/2018
function main(input) {
    let ip_arr = input.split('\n');
    let no_of_colleagues = Number(ip_arr[0]);
    const choco_arr = getUniqueArr(ip_arr[1].split(' ').map(Number));
    const len = choco_arr.length - 1;
    choco_arr.sort(sortCallback);
    const result = Math.min(
        findMinOperations(choco_arr.slice(), len, 1),
        findMinOperations(choco_arr.slice(), len, 3),
        findMinOperations(choco_arr.slice(), len, 5)
    );
    console.log(result);
}

function sortCallback(a, b) {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
}

function getUniqueArr(choco_arr) {
    let unique_choco_arr = [];
    let choco_map = new Map();
    for (let i = 0; i < choco_arr.length; i++) {
        if (!choco_map.has(choco_arr[i])) {
            choco_map.set(choco_arr[i], true);
            unique_choco_arr.push(choco_arr[i]);
        }
    }
    return unique_choco_arr;
}

function findMinOperations(choco_arr, index, num) {
    // can  give 1,3,5 choco at a time
    let operations_count = 0;
    if (choco_arr.length === 1) return 0;
    if (choco_arr[index] - num < 0) return Number.MAX_SAFE_INTEGER;
    choco_arr[index] = choco_arr[index] - num;
    const unique_choco_arr = getUniqueArr(choco_arr);
    const len = unique_choco_arr.length - 1;
    unique_choco_arr.sort(sortCallback);
    operations_count = 1 + Math.min(
        findMinOperations(unique_choco_arr.slice(), len, 1),
        findMinOperations(unique_choco_arr.slice(), len, 3),
        findMinOperations(unique_choco_arr.slice(), len, 5)
    );
    return operations_count;
}
// main("4\n2 2 3 7");
// main("3\n10 7 12");
main("3\n1 1 5");