/*jshint esversion:6*/
/*    
 * Shekhar Suman
 * 10/25/2018
 */
function main() {
    // const arr = [1, 2, 3, 5];
    // const arr = [1, 3];
    const arr = [1, 2, 3, 4, 5, 6, 7, 9];
    const missing_number = findMissingNumber(arr, 0, arr.length - 1);
    console.log(missing_number);
}

function findMissingNumber(arr, start_index, end_index) {
    const mid_index = Math.floor((start_index + end_index) / 2);
    if (arr[mid_index] === mid_index + 1) {
        return findMissingNumber(arr, mid_index + 1, end_index);
    }
    return mid_index + 1;
}

main();