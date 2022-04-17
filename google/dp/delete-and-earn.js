var deleteAndEarn = function (nums) {
    const sortedArr = [...new Set(nums)].sort((a, b) => a - b);
    const freqMap = new Map();
    for (let n of nums) {
        if (!freqMap.has(n)) freqMap.set(n, 0);
        freqMap.set(n, freqMap.get(n) + 1);
    }

    let p1 = 0, p2 = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        const p = sortedArr[i] * freqMap.get(sortedArr[i]);
        let tmp = p2;

        if (i > 0 && sortedArr[i - 1] + 1 === sortedArr[i]) p2 = Math.max(p1 + p, p2);
        else p2 += p;

        p1 = tmp;
    }

    return p2;
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));