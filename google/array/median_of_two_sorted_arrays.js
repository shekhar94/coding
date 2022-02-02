function getMergedArr(arr1, arr2) {
    const arr3 = [];
    let p1 = 0; p2 = 0; l1 = arr1.length, l2 = arr2.length;

    while (p1 < l1 || p2 < l2) {
        if (p1 > l1 - 1) { // arr1 merging done
            arr3.push.apply(arr3, arr2.slice(p2, l2));
            p2 = l2;
            return arr3;
        }
        if (p2 > l2 - 1) { // arr2 merging done
            arr3.push.apply(arr3, arr1.slice(p1, l1));
            p1 = l1;
            return arr3
        }
        if (arr1[p1] >= arr2[p2]) { // next value in arr2 <= arr1
            arr3.push(arr2[p2]);
            p2++;
        } else { // next value in arr1 < arr2
            arr3.push(arr1[p1]);
            p1++;
        }
    }

    return arr3;
}

function findMedianSortedArrays(arr1, arr2) {
    const arr3 = getMergedArr(arr1, arr2);
    console.log('arr3: ', arr3);
    const len = arr3.length;
    let median;
    let mid;

    if (len % 2 === 0) {
        mid = len / 2;
        median = (arr3[mid - 1] + arr3[mid]) / 2;
    } else {
        mid = (len - 1) / 2;
        median = arr3[mid];
    }
    return median;
}

function main() {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    // const arr1 = [1, 3], arr2 = [2];
    console.log(findMedianSortedArrays(arr1, arr2));
}

main();