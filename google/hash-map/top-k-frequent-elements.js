// https://leetcode.com/problems/top-k-frequent-elements/submissions/
function topKFrequent(arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    let keyValArr = [];
    map.forEach((value, key) => {
        keyValArr.push([key, value]);
    })
    keyValArr.sort((a, b) => a[1] - b[1]);
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(keyValArr[keyValArr.length - 1 - i][0]);
    }
    return res;
}

// efficient: Using frequency indexing
function topKFrequentFreqIndex(arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }

    const freqIndex = [];
    map.forEach((freq, num) => {
        if (!freqIndex[freq]) {
            freqIndex[freq] = [];
        }
        freqIndex[freq].push(num);
    });

    const res = [];
    let i = freqIndex.length - 1;
    while (res.length < k) {
        if (freqIndex[i]) {
            const nums = freqIndex[i];
            for (let j = 0; j < nums.length && res.length < k; j++) res.push(nums[j]);
        }
        i--;
    }
    return res;
}

function main() {
    const arr = [1, 1, 1, 2, 2, 3], k = 2;
    // const arr = [1], k = 1;
    // const arr = [3, 1, 4, 4, 5, 2, 6, 1], k = 2;
    // const arr = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], k = 4;
    console.log(topKFrequentFreqIndex(arr, k));
}

main();