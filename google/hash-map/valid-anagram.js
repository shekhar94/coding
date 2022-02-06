function isAnagram(s, t) {
    const map = new Map();
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 0);
        }
        map.set(s[i], map.get(s[i]) + 1);
    }
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) return false;
        map.set(t[i], map.get(t[i]) - 1);
    }

    return ![...map.values()].find(val => val !== 0);
}

function isAnagram1(s, t) {
    if (s.length !== t.length) return false;

    const map1 = [];
    const map2 = [];

    for (let i = 0; i < s.length; i++) {
        const sCharCode = s[i].charCodeAt(0);
        const tCharCode = t[i].charCodeAt(0);
        if (!map1[sCharCode]) map1[sCharCode] = 1;
        if (!map2[tCharCode]) map2[tCharCode] = 1;
        map1[sCharCode]++;
        map2[tCharCode]++;
    }
    for (let i = 97; i < 123; i++) {
        if (map1[i] !== map2[i]) return false;
    }
    return true;
}

function main() {
    const s = "anagram", t = "nagaram";
    // const s = "rat", t = "car";
    console.log(isAnagram(s, t));
}

main();