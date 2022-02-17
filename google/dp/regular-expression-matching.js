
// https://leetcode.com/problems/regular-expression-matching/submissions/

// Recursive solution
function dfs(s, sI, p, pI) {
    if (sI >= s.length && pI >= p.length) return true; // both indices out of bound that means it's a complete match
    if (pI >= p.length) return false; // if pattern index is out of bound then we are sure that it's not a match
    // There will be a match 
    // 1. if both the pattern and string has same char at current index
    // 2. if current index in pattern string is '.' which can match any single char
    const match = (sI < s.length) && (s[sI] === p[pI] || p[pI] === '.')
    // If the char at next index in pattern string is '*'
    // There are 2 possiblities
    // 1. There are no occurences of current char in that scenario we need to move two chars ahead in pattern string to match the current char in s
    // 2. If current char in s is matching with current char in pattern string, we can take 1 occurence of current char in pattern and move on to match next char in s
    if (pI + 1 < p.length && p[pI + 1] === '*') {
        return (dfs(s, sI, p, pI + 2) || (match && dfs(s, sI + 1, p, pI)))
    }
    // if current char in s is matching with current char in p move to next char in both s and p
    if (match) return dfs(s, sI + 1, p, pI + 1);
    return false;
}

// DP approach efficient (based on the recursive approach)
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