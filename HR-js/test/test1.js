function find_smallest_number(num) {
    let num_arr = num.split('').map(Number);
    let sorted_arr = num_arr.slice().sort(function(a, b) {
        return a - b;
    });
    let index = findMinForSwap(num_arr, sorted_arr[0]);
    // sorted_arr.indexOf(
    let min = num_arr[index];
    let min_index = findLastOccurance(num_arr, sorted_arr[0]); //num_arr.indexOf(min);
    swap(num_arr, index, min_index);
    return num_arr.join('');
}

function findMinForSwap(num_arr, min) {
    let i = 0;
    while (num_arr[i] === min) i++;
    return i;
}

function findLastOccurance(arr, num) {
    let last_index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num && i > last_index) last_index = i;
    }
    return last_index;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function main() {
    console.log(find_smallest_number("1234577777771889189"));
}
main();