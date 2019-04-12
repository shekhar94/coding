function main() {
    let n = 5;
    let arr = [2, 1, 3, 1, 2];
    let tmp = [];
    console.log(merge_sort(arr, tmp, 0, n - 1));
    console.log(arr);
}

function merge_sort(arr, tmp, left_start, right_end) {
    let inv_count = 0;
    if (left_start >= right_end)
        return inv_count;
    let middle = Math.floor((left_start + right_end) / 2);
    inv_count = merge_sort(arr, tmp, left_start, middle);
    inv_count += merge_sort(arr, tmp, middle + 1, right_end);
    inv_count += merge_halves(arr, tmp, left_start, right_end);
    return inv_count;
}

function merge_halves(arr, tmp, left_start, right_end) {
    let inv_count = 0;
    let left = left_start;
    let index = left_start;
    let left_end = Math.floor((left_start + right_end) / 2);
    let right = left_end + 1;
    let size = right_end - left_start + 1;
    while ((left <= left_end) && (right <= right_end)) {
        if (arr[left] <= arr[right]) {
            tmp[index] = arr[left];
            left += 1;
        } else {
            tmp[index] = arr[right];
            right += 1;
            inv_count = inv_count + (left_end + 1 - left);
        }
        index += 1;
    }
    copy_arr(arr, left, tmp, index, left_end - left + 1);
    copy_arr(arr, right, tmp, index, right_end - right + 1);
    copy_arr(tmp, left_start, arr, left_start, size);
    return inv_count;
}

function copy_arr(src_arr, src_start, dest_arr, dest_start, no_of_ele) {
    for (let i = 0; i < no_of_ele; i++) {
        dest_arr[dest_start] = src_arr[src_start];
        dest_start += 1;
        src_start += 1;
    }
}

main();