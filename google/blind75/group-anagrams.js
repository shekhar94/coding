// Time O(N.M) N: size if strs array, M: Max Size of a string
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let c of str) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = JSON.stringify(count);
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return [...map.values()];
}