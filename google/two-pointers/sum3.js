// https://leetcode.com/problems/3sum/

function cleanArr(arr) {
    const clean = [];
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        const noExists = map.has(currNum);
        const count = map.get(currNum);
        const isZero = currNum === 0;

        if ((noExists && count < 2) ||
            (noExists && isZero && count < 3)) {
            map.set(currNum, count + 1);
            clean.push(currNum);
        } else if (!noExists) {
            map.set(currNum, 1);
            clean.push(currNum);
        }
    }
    return clean;
}

function threeSum(arr) {
    const len = arr.length;
    const res = [];

    if (len < 3) return [];
    arr = arr.sort((a, b) => a - b);
    arr = cleanArr(arr); // clean to remove duplicates(2 occurance allowed for non zero, 3 for 0)

    for (let i = 0; i < len - 2; i++) {
        const reqSum = 0 - arr[i];

        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let s = i + 1, e = len - 1;
        while (s < e) {
            const sum = arr[s] + arr[e];
            const isDuplicateLtoR = s + 1 < len && arr[s] === arr[s + 1];
            const isDuplicateRtoL = e - 1 >= 0 && arr[e] === arr[e - 1];
            if (reqSum === sum) {
                res.push([arr[i], arr[s], arr[e]]);
                if (isDuplicateLtoR) s += 2;
                else s++;
                if (isDuplicateRtoL) e -= 2;
                else e--;
            } else if (reqSum > sum) {
                s++;
            } else {
                e--;
            }
        }
    }
    return res;
}

function main() {
    // const arr = [-1, 0, 1, 2, -1, -4];
    // const arr = [0, -1, 2, -3, 1];
    // const arr = [-2, 0, 0, 2, 2];
    const arr = [-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0];
    console.log(threeSum(arr));
}

main();