var shortestCompletingWord = function (licensePlate, words) {
    const freqMap = new Map();

    for (let i = 0; i < licensePlate.length; i++) {
        const c = licensePlate[i].toLowerCase();
        const isNan = isNaN(parseInt(c));
        const isSpace = c === ' ';

        if (isNan && !isSpace) {
            if (!freqMap.has(c)) freqMap.set(c, 0);
            freqMap.set(c, freqMap.get(c) + 1);
        }
    }

    let min = Number.MAX_SAFE_INTEGER;
    let res;
    const keyArr = [...freqMap.keys()];
    for (let word of words) {
        const map = new Map();
        for (let j = 0; j < word.length; j++) {
            const c = word[j];
            if (!map.has(c)) map.set(c, 0);
            map.set(c, map.get(c) + 1);
        }

        let p = true
        for (let key of keyArr) {
            if (freqMap.get(key) > (map.get(key) || 0)) {
                p = false;
                break;
            }
        }
        if (p && min > word.length) {
            min = word.length;
            res = word;
        }
    }
    return res;
};

// console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
console.log(shortestCompletingWord("Ah71752",
    ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"]));