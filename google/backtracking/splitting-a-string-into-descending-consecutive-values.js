// O(n^n)
var splitString = function (s) {
    const len = s.length;

    function dfs(idx, prev) {
        if (idx === len) return true;

        for (let i = idx; i < len; i++) {
            const num = parseInt(s.substring(idx, i + 1));
            if (num === prev - 1 && dfs(i + 1, num)) return true;
        }
        return false;
    }

    for (let i = 0; i < len - 1; i++) {
        const num = parseInt(s.substring(0, i + 1));
        if (dfs(i + 1, num)) return true;
    }

    return false;
};