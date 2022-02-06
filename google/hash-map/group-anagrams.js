// https://leetcode.com/problems/group-anagrams/submissions/

function getCharMapFromString(str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], 0)
        }
        map.set(str[i], map.get(str[i]) + 1);
    }

    return map;
}

function getCharMap(strs) {
    const charMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        if (!charMap.has(strs[i])) {
            charMap.set(strs[i], getCharMapFromString(strs[i]));
        }
    }
    return charMap;
}

function isAnagrams(str1, str2, charMap) {
    if (str1.length !== str2.length) return false;
    const charMapStr1 = charMap.get(str1);
    const charMapStr2 = charMap.get(str2);
    for (let char of charMapStr1.keys()) {
        if (charMapStr1.get(char) !== charMapStr2.get(char)) return false;
    }
    return true;
}

function groupAnagrams(strs) {
    const addedToGroup = [];
    let groupMap = new Map();
    const charMap = getCharMap(strs);
    for (let i = 0; i < strs.length; i++) {
        if (!addedToGroup[i]) {
            groupMap.set(strs[i], [strs[i]]);
            console.log('groupMap: ', groupMap);
            addedToGroup[i] = true;
        } else continue;
        for (let j = i + 1; j < strs.length; j++) {
            if (isAnagrams(strs[i], strs[j], charMap)) {
                console.log('groupMap: ', groupMap);
                groupMap.get(strs[i]).push(strs[j]);
                addedToGroup[j] = true;
            }
        }
    }
    return [...groupMap.values()];
}

function main() {
    // const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const strs = [""];
    console.log(groupAnagrams(strs));
}

main();