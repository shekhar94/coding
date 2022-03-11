var isIsomorphic = function (s, t) {
    const smap = new Map();
    const tmap = new Map();
    for (let i = 0; i < s.length; i++) {
        if ((smap.has(s[i]) && smap.get(s[i]) !== t[i]) ||
            (tmap.has(t[i]) && tmap.get(t[i]) !== s[i])) return false;
        else {
            smap.set(s[i], t[i]);
            tmap.set(t[i], s[i]);
        }
    }
    return true;
};

console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("badc", "baba"));
// console.log(isIsomorphic("paper", "title"));