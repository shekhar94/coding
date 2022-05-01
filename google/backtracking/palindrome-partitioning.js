var partition = function (s) {
    let res = [];
    let partition = [];

    function isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            [l, r] = [l + 1, r - 1];
        }
        return true;
    }

    function dfs(i) {
        if (i === s.length) {
            res.push([...partition]);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                partition.push(s.substring(i, j + 1))
                dfs(j + 1);
                partition.pop();
            }
        }
    }

    dfs(0);
    return res;
};

console.log(partition("aab"));