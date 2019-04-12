/*jshint esversion:6*/
/*    
 * Shekhar Suman
 * 10/25/2018
 * Find missing number in an array of natural numbers
 * 
 */
function main() {
    const arr = [1, 2, 3, 5];
    // const arr = [1, 3];
    // const arr = [1, 2, 3, 4, 5, 6, 7, 9];
    // const arr = [1, 3, 4, 5, 6, 7, 8, 9];
    // const arr = [1, 2, 3, 4, 5, 6, 8, 9];
    // const arr = [2, 3, 4, 5, 6];
    // const arr = [1, 2, 3, 4, 5, 7];
    const missing_number = findMissingNumber(arr, 0, arr.length - 1);
    console.log(missing_number);
}

function findMissingNumber(arr, start_index, end_index) {
    const mid_index = Math.floor((start_index + end_index) / 2);
    const expected_value = mid_index + 1;
    if ((arr[mid_index] - arr[mid_index - 1] > 1) || (mid_index - 1 < 0 && expected_value !== arr[mid_index])) {
        return expected_value;
    }
    if (arr[mid_index] === expected_value) {
        return findMissingNumber(arr, mid_index + 1, end_index);
    } else {
        return findMissingNumber(arr, start_index, mid_index - 1);
    }
}

main();