function main() {
    let n = 5;
    let arr = [2, 1, 3, 1, 2, 5, 0];
    let tmp = [];
    merge_sort(arr, tmp, 0, 6);
    console.log(arr);
}
main();
function merge_sort(arr, tmp, left_start, right_end) {
    if (left_start >= right_end) {
        return;
    }
    let middle = Math.floor((left_start + right_end) / 2);
    merge_sort(arr, tmp, left_start, middle);
    merge_sort(arr, tmp, middle + 1, right_end);
    merge_halves(arr, tmp, left_start, right_end);
}
function merge_halves(arr, tmp, left_start, right_end) {
    let left_end = Math.floor((left_start + right_end) / 2);
    let left = left_start;
    let right = left_end + 1;
    let index = left_start;
    let size = (right_end - left_start + 1);
    while((left <= left_end) && (right <= right_end)) {
        if (arr[left] <= arr[right]) {
            tmp[index] = arr[left];
            left++;
        } else {
            tmp[index] = arr[right]
            right++;
        }
        index++;
    }
    copy_arr(arr, left, tmp, index, left_end - left + 1); // copy remaining elements directly
    copy_arr(arr, right, tmp, index, right_end - right + 1);
    copy_arr(tmp, left_start, arr, left_start, size); // finally copy everything into original arr
}
function copy_arr(src_arr, src_start, dest_arr, dest_start, no_of_ele) {
    for (let i = 0; i < no_of_ele; i++) {
        dest_arr[dest_start++] = src_arr[src_start++];
    }
}