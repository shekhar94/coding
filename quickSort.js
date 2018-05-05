function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    let pivot = arr[Math.floor((left + right) / 2)];
    let index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
    console.log(arr);
}
function partition(arr, left, right, pivot) {
    while(left < right) {
        while(arr[left] < pivot) {
            left++;
        }
        while(arr[right] > pivot) {
            right--;
        }
        if(left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}
function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}
var arr = [4,5,6,1,2,3]
quickSort(arr, 0, 5);