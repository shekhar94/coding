function main() {
    let n = 5;
    let arr = [1, 20, 6, 4, 5];
    countSwap(arr, n);
}

function countSwap(arr, n) {

}

function swap(arr, left, right) {
    arr[left] = arr[left] + arr[right];
    arr[right] = arr[left] - arr[right];
    arr[left] = arr[left] - arr[right];
}