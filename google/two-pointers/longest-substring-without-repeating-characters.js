// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function getUpdatedMap(str, s, e) {
    const map = new Map();
    for (let i = s; i < e + 1; i++) {
        map.set(str[i], i);
    }
    return map;
}

function lengthOfLongestSubStr(str) {
    let l = str.length;
    let s = 0, e = 1;
    let map = new Map();
    let maxL = 1, currL = 1;

    if (l <= 1) return l;

    map.set(str[s], s);

    while (s < l && e < l) {
        if (map.has(str[e])) {
            dupI = map.get(str[e]);
            if (maxL < currL) maxL = currL;
            s = dupI + 1;
            currL = e - s + 1;
            map = getUpdatedMap(str, s, e);
        } else {
            map.set(str[e], e);
            currL++;
        }
        e++;
    }
    if (currL > maxL) maxL = currL;
    return maxL;
}

function main() {
    // const str = 'abcabcbb';
    // const str = 'bbbbb';
    // const str = 'pwwkew';
    const str = 'au';
    // const str = 'dvdf';

    console.log(lengthOfLongestSubStr(str));
}

main();