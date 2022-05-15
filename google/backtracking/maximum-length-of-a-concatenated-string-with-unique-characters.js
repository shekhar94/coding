// Time O(2^n)
var maxLength = function (arr) {
    function hasUniqueChars(word) {
        const map = new Map();
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            if (map.has(c)) return false;
            map.set(c, true);
        }
        return true;
    }
    let res = 0;
    function dfs(idx, str) {
        if (idx === arr.length) return;
        const newStr = str + arr[idx];

        if (hasUniqueChars(newStr)) {
            res = Math.max(res, newStr.length);
            dfs(idx + 1, newStr);
        }
        dfs(idx + 1, str);
    }
    dfs(0, '');
    return res;
};