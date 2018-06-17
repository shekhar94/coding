/*jshint esversion:6*/
// https://www.hackerrank.com/challenges/equal/problem
// Author: Shekhar Suman 11/06/2018
function main(input) {
    let ip_arr = input.split('\n');
    let no_of_colleagues = Number(ip_arr[0]);
    let choco_arr = ip_arr[1].split(' ').map(Number);

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

function findMinOperations(choco_arr) {
    // can  give 1,3,5 choco at a time
    let operations_count = 0;
    if (choco_arr.length === 1) {
        return 0;
    }
    let unique_choco_arr = getUniqueArr(choco_arr);
    for (let i = 0; i < unique_choco_arr.length; i++) {

    }
}
main("4\n2 2 3 7");