/*jshint esversion:6*/
main("4 5 2\n1 4 5 3 2");

function main(input) {
    let ip_arr = input.split("\n");
    let nmd_arr = ip_arr[0].split(' ').map(Number);
    let s_arr = ip_arr[1].split(' ').map(Number);
    let result_ar = findMinSub(s_arr, nmd_arr);
    console.log(result_ar.join(' '));
}

function findMinSub(s_arr, nmd_arr) {
    let temp_arr = s_arr.slice();
    let n = nmd_arr[0];
    let m = nmd_arr[1];
    let result_ar = [];
    temp_arr.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    });
    let loc_map = new Map();
    for (let i = 0; i < m; i++) {
        loc_map.set(temp_arr[i], i);
    }
    for (let i = 0; i < m; i++) {
        if (loc_map.get(s_arr[i]) < n) {
            result_ar.push(s_arr[i]);
        }
    }
    return result_ar;
}