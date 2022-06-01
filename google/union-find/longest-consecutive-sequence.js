function _getSequenceLen(map, lastNo) {
    let seqLen = 0;

    // can store just the length also instead of maintaining an array
    while (map.has(lastNo + 1)) {
        lastNo++;
        seqLen++;
    }
    return seqLen;
}

function longestConsecutive(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 1);
        map.set(nums[i], map.get(nums[i]) + 1); // to handle duplicate numbers
    }

    const groupingMap = new Map();
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i] - 1)) {
            // This is start of a sequence
            groupingMap.set(nums[i], 1 + _getSequenceLen(map, nums[i]));
            maxLen = Math.max(maxLen, groupingMap.get(nums[i]));
        }
    }

    return maxLen;
}

function main() {
    // const nums = [100, 4, 200, 1, 3, 2];
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    console.log(longestConsecutive(nums));
}

main();