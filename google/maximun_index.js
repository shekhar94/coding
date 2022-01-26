// https://practice.geeksforgeeks.org/problems/maximum-index-1587115620/1#
function maxIndexDiff(arr, n) {
    let maxR = new Array(n);
    let minL = new Array(n);


    minL[0] = arr[0]
    for (let i = 1; i < n; i++) {
        minL[i] = Math.min(minL[i - 1], arr[i]);
    }

    console.log('minL: ', minL);

    maxR[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], arr[i]);
    }

    console.log('maxR: ', maxR);

    let d = -1, j = 0, i = 0;
    while (i < n && j < n) {
        if (maxR[j] >= minL[i]) {
            d = Math.max(d, j - i);
            j++;
        } else i++;
    }
    return d;
}

// console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1], 9));
// console.log(maxIndexDiff([1, 10], 2));
console.log(maxIndexDiff([82, 63, 44, 74, 82, 99, 82], 7));