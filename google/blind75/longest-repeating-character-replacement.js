// var characterReplacement = function (s, k) {
//     let len = s.length;
//     let res = 0;
//     let l = 0;
//     const freqMap = new Map();
//     for (let r = 0; r < len; r++) {
//         const c = s[r];
//         if (!freqMap.has(c)) freqMap.set(c, 0);
//         freqMap.set(c, freqMap.get(c) + 1);
//         const maxFreq = Math.max(...freqMap.values());
//         while ((r - l + 1) - maxFreq > k) {
//             freqMap.set(s[l], freqMap.get(s[l]) - 1);
//             l += 1;
//         }
//         res = Math.max(res, r - l + 1);
//     }
//     return res;
// };

// Improved time complexity
var characterReplacement = function (s, k) {
    let [res, l, maxFreq] = [0, 0, 0];
    const freqMap = new Map();
    for (let r = 0; r < s.length; r++) {
        const c = s[r];
        if (!freqMap.has(c)) freqMap.set(c, 0);
        freqMap.set(c, freqMap.get(c) + 1);
        maxFreq = Math.max(maxFreq, freqMap.get(c));
        while ((r - l + 1) - maxFreq > k) {
            freqMap.set(s[l], freqMap.get(s[l]) - 1);
            l += 1;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};
console.log(characterReplacement("AABABBA", 1));