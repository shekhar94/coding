
// https://leetcode.com/problems/regular-expression-matching/submissions/
function dfs(s, sI, p, pI) {
    if (sI >= s.length && pI >= p.length) return true;
    if (pI >= p.length) return false;

    const match = (sI < s.length) && (s[sI] === p[pI] || p[pI] === '.')
    if (pI + 1 < p.length && p[pI + 1] === '*') {
        return (dfs(s, sI, p, pI + 2) || (match && dfs(s, sI + 1, p, pI)))
    }
    if (match) return dfs(s, sI + 1, p, pI + 1);
    return false;
}

let dp = [];

function dfsDP(s, sI, p, pI) {
    if (sI >= s.length && pI >= p.length) return true;
    if (pI >= p.length) return false;

    if (dp[sI][pI] !== -1) return dp[sI][pI];

    const match = (sI < s.length) && (s[sI] === p[pI] || p[pI] === '.')
    if (pI + 1 < p.length && p[pI + 1] === '*') {
        dp[sI][pI + 2] = dfsDP(s, sI, p, pI + 2)
        if (match) dp[sI + 1][pI] = dfsDP(s, sI + 1, p, pI);
        return dp[sI][pI] = (dp[sI][pI + 2] || (match && dp[sI + 1][pI]))
    }
    if (match) return dp[sI + 1][pI + 1] = dfsDP(s, sI + 1, p, pI + 1);
    return false;
}

function isMatch(s, p) {
    dp = Array(s.length + 5);
    for (let i = 0; i < s.length + 5; i++) {
        dp[i] = Array(p.length + 5).fill(-1);
    }
    return dfsDP(s, 0, p, 0);
}

function main() {
    // const s = "aa", p = "a";
    // const s = "aa", p = "a*";
    // const s = "ab", p = ".*";
    // const s = "ablny", p = "a*b.*y";
    // const s = "aaa", p = "aaaa";
    const s = "a", p = "ab*a";
    console.log(isMatch(s, p));
}

main();