
// Brute Force approach: Merging both arrays and finding the median
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



// Efficient Approach: Divide and Concr.
function getMinOrMax(num, min) {
    if (num || num === 0) return num;
    return min ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
}

function findMedianSortedArraysDivideAndCon(arr1, arr2) {
    let A = arr1, B = arr2; // Assuming array A has smaller length
    const total = A.length + B.length;
    const half = Math.floor(total / 2);
    if (A.length > B.length) { // If A has greater length than B swap the arrays
        const tmp = A;
        A = B; B = tmp;
    }

    let left = 0, right = A.length - 1;
    while (true) {
        // lpeA is like mid in binary search
        // lpeA: left partition end for A
        const lpeA = Math.floor((left + right) / 2); // This index is end of left partition in A
        const lpeB = half - lpeA - 2 //  left partition end index for B
        const leftA = getMinOrMax(A[lpeA], true);
        const rightA = getMinOrMax(A[lpeA + 1]);
        const leftB = getMinOrMax(B[lpeB], true);
        const rightB = getMinOrMax(B[lpeB + 1]);

        if (leftA <= rightB && leftB <= rightA) {
            // solution found
            // Two scenarios 1. Odd total 2. Even total
            if (total % 2 === 0) {
                return ((Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2);
            } else return Math.min(rightA, rightB);
        } else if (leftA > rightB) right = lpeA - 1; // similar to mid-1 in binary search
        else left = lpeA + 1;
    }
}

function main() {
    // const arr1 = [1, 2];
    // const arr2 = [3, 4];
    // const arr1 = [1, 3], arr2 = [2];
    const arr1 = [];
    const arr2 = [0];
    console.log(findMedianSortedArraysDivideAndCon(arr1, arr2));
}

main();