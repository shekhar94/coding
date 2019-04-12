function main(input) {
    var ip_arr = input.split('\n'),
        no_of_ip = Number(ip_arr[0]),
        ip_data = ip_arr[1].split(" ").map(Number);
    bubbleSort(ip_data, no_of_ip);
}

function bubbleSort(arr, len) {
    var isSorted = false;
    var swap_count = 0;
    var last_unsorted = len - 1;
    while (!isSorted) {
        isSorted = true;
        for (var i = 0; i < last_unsorted; i++) {
            if (arr[i] > arr[i + 1]) {
                swap_count++;
                swap(arr, i, i + 1);
                isSorted = false;
            }
        }
        last_unsorted--;
    }
    console.log("Array is sorted in", swap_count, "swaps.");
    console.log("First Element: ", arr[0]);
    console.log("Last Element: ", arr[len - 1]);
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
main("3\n2 1 3");