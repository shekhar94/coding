// Quick Sort variation
function partition(arr, l, r, k) {
    let pivot = arr[r], p = r;
    let i = l, j = r - 1;
    if (l < 0 || r >= arr.length) return; // out of bound scenario return nothing

    while (i <= j) {
        if (arr[i] >= pivot && arr[j] < pivot) {
            // swap the elements at i and j
            [arr[i], arr[j]] = [arr[j], arr[i]]; i++; j--;
        }
        if (arr[i] < pivot) i++;
        if (arr[j] >= pivot) j--;
    }

    // swap the pivot element with latest i
    [arr[i], arr[p]] = [arr[p], arr[i]]

    if (i === k) return arr[i];
    else if (i < k) return partition(arr, i + 1, r, k); // recur. right part of the array
    else return partition(arr, l, i - 1, k); // recur. left part of the array
}

function findKthLargest(arr, k) {
    return partition(arr, 0, arr.length - 1, arr.length - k);
}

function main() {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 7;
    // const nums = [7, 10, 4, 3, 20, 15], k = 4;
    console.log(findKthLargest(nums, k));
}

main()