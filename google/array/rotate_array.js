// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// method 1
function rotate(nums, k) {
    const len = nums.length;
    const effRot = k % len;

    if (len === 1) return;

    for (let rotationCount = 1; rotationCount <= effRot; rotationCount++) {
        let tmp1 = nums[0];
        let tmp2 = nums[1];
        for (let i = 1; i < len; i++) {
            nums[i] = tmp1;
            tmp1 = tmp2;

            if (i + 1 < len)
                tmp2 = nums[i + 1];
        }
        nums[0] = tmp1;
    }
}


// method 2 
function rotate1(nums, k) {
    const len = nums.length;
    const effRot = k % len;

    if (len === 1) return;
    for (let rotationCount = 1; rotationCount <= effRot; rotationCount++) {
        let tmp = nums.pop();
        nums.unshift(tmp);
    }
}


// method 3 time O(n) space O(1) accepted sol
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function reverseCustom(arr, start, end) {
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
}

function rotate2(nums, k) {
    const len = nums.length;
    const effRot = k % len;

    nums.reverse();
    reverseCustom(nums, 0, effRot - 1);
    reverseCustom(nums, effRot, len - 1);
}

function main() {
    // const ip_arr = [1, 2, 3, 4, 5, 6, 7];
    // const k = 3;

    const ip_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const k = 3;

    // const ip_arr = [1, 2];
    // const k = 3;
    // [25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    // const ip_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
    // const k = 82;
    rotate2(ip_arr, k);
    console.log(ip_arr);
}

main();