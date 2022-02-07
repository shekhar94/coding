// https://leetcode.com/problems/sort-characters-by-frequency/submissions/

function getCharToFreqMap(s) {
    const charToFreqMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!charToFreqMap.has(char)) {
            charToFreqMap.set(char, 0);
        }
        charToFreqMap.set(char, charToFreqMap.get(char) + 1);
    }
    return charToFreqMap;
}

function getFreqToCharArrMap(charToFreqMap) {
    const freqToCharArrMap = new Map();
    charToFreqMap.forEach((freq, char) => {
        if (!freqToCharArrMap.has(freq)) {
            freqToCharArrMap.set(freq, []);
        }
        freqToCharArrMap.get(freq).push(char);
    });

    return freqToCharArrMap;
}


function frequencySort(s) {
    const charToFreqMap = getCharToFreqMap(s);
    const freqToCharArrMap = getFreqToCharArrMap(charToFreqMap);

    const freqArr = freqToCharArrMap.keys();
    const sortedFreqArr = [...freqArr].sort((a, b) => b - a);

    const freqSortedArr = []; // will hold the final result
    for (let i = 0; i < sortedFreqArr.length; i++) {
        const freq = sortedFreqArr[i];
        const charArr = freqToCharArrMap.get(freq);
        for (let j = 0; j < charArr.length; j++) {
            const char = charArr[j];
            freqSortedArr.push.apply(freqSortedArr, Array(freq).fill(char));
        }
    }
    return freqSortedArr.join('');
}

function main() {
    // const s = "tree";
    // const s = "cccaaa";
    const s = "Aabb";
    console.log(frequencySort(s));
}

main();