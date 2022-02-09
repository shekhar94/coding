// https://leetcode.com/problems/find-k-closest-elements/
// To find the most closest element
function findClosestElement(arr, x) {
    let len = arr.length;
    let s = 0, e = len - 1;
    let closest = len - 1;
    while (s <= e) {
        const mid = Math.floor((s + e) / 2);
        const mod = Math.abs(arr[mid] - x);

        if (
            closest >= 0 &&
            closest <= len - 1 &&
            Math.abs(arr[closest] - x) >= mod
        ) {
            // to handle the case when lower value of closest will get overridden by higher value if mod is same for both
            if (!(Math.abs(arr[closest] - x) === mod && mid > closest)) closest = mid;
        }

        if (arr[mid] === x) return mid;
        else if (arr[mid] < x) s = mid + 1;
        else e = mid - 1;
    }
    return closest;
}

// Using most closest as ref point to find remaining k closest elements
function findKClosestElement(arr, k, x) {
    const closest = findClosestElement(arr, x);

    let res = [], left = 1, right = 1;
    res[closest] = arr[closest];

    while (left + right - 1 < k) {
        let modl, modr, leftI = closest - left, rightI = closest + right;
        if (leftI > -1) modl = Math.abs(arr[leftI] - x);
        if (rightI < arr.length) modr = Math.abs(arr[rightI] - x);
        const isValidModl = (modl || modl === 0), isValidModr = (modr || modr === 0); // to include the case when mod is 0

        if (isValidModl && isValidModr && modl < modr) {
            res[leftI] = arr[leftI]; left++;
        } else if (isValidModl && isValidModr && modl > modr) {
            res[rightI] = arr[rightI]; right++;
        } else if (isValidModl) {
            res[leftI] = arr[leftI]; left++;
        } else {
            res[rightI] = arr[rightI]; right++;
        }
    }
    return res.slice(closest - (left - 1), closest + right);
}


function main() {
    const arr = [1, 2, 3, 4, 5], k = 4, x = 3;
    // const arr = [1, 2, 3, 4, 5], k = 4, x = -1;
    // const arr = [1, 1, 1, 10, 10, 10], k = 1, x = 9;
    // const arr = [1, 3], k = 1, x = 2;

    console.log(findKClosestElement(arr, k, x));
}

main();