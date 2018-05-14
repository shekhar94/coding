function main(input) {
    var ip_arr = input.split('\n').map(Number),
        no_of_int = ip_arr[0],
        len = ip_arr.length;
    for (var ip_arr_i = 1; ip_arr_i < len; ip_arr_i++) {
        getMedian(ip_arr[ip_arr_i]);
    }
    // min_heap.pop();
}

function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    let pivot = arr[Math.floor((left + right) / 2)];
    let index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
}

function partition(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
var arr = [3, 9, 1, 100, 99, 3, 4];
quickSort(arr, 0, 6);
console.log(arr);