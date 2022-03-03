function longestConsecutive(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 1);
        map.set(nums[i], map.get(nums[i]) + 1); // to handle duplicate numbers
    }

    const groupingMap = new Map();
    function _getSequence(lastNo) {
        let tmpArr = [];

        while (map.has(lastNo + 1)) {
            lastNo++;
            tmpArr.push(lastNo);
        }
        return tmpArr;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i] - 1)) {
            // This is start of a sequence
            groupingMap.set(nums[i], [nums[i], ..._getSequence(nums[i])]);
        }
    }

    return [...groupingMap.values()].reduce((acc, item) => {
        acc = Math.max(acc, item.length); return acc;
    }, 0);
}

function main() {
    // const nums = [100, 4, 200, 1, 3, 2];
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    console.log(longestConsecutive(nums));
}

main();