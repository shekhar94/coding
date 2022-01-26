// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1
function subarraySum(arr, n, s) {
    let start = 0, end = 0, sum = arr[0];
    while (end < n) {
        if (sum === s) return [start + 1, end + 1];
        else if (sum > s) {
            sum -= arr[start];
            start += 1;
        } else {
            end += 1;
            sum += arr[end];
        }
    }
    return [-1];
}

function main() {
    // const arr = [1, 2, 3, 7, 5], n = 5, s = 12;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n = 10, s = 15;
    console.log(subarraySum(arr, n, s));
}

main();