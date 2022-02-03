// https://leetcode.com/problems/container-with-most-water/
function maxArea(arr) {
    let s = 0;
    let e = arr.length - 1;
    let mArea = 0;

    while (s < e) {
        const area = Math.min(arr[s], arr[e]) * (e - s);
        if (area > mArea) mArea = area;
        if (arr[s] < arr[e]) s++;
        else e--;
    }
    return mArea;
}

function main() {
    // const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    // const arr = [1, 1];
    // const arr = [1, 5, 4, 3];
    const arr = [3, 1, 2, 4, 5];
    console.log(maxArea(arr));
}

main();