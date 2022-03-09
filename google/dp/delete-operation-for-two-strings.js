
// Recursive Approach: TLE
function recursive(s1, s2, i, j) {
    if (i === 0) return j;
    if (j === 0) return i;

    if (s1[i - 1] === s2[j - 1]) return recursive(s1, s2, i - 1, j - 1);
    else {
        return 1 + Math.min(
            recursive(s1, s2, i - 1, j), // delete from s1
            recursive(s1, s2, i, j - 1) // delete from s2
        );
    }
}

// Memoized recursion
let dp;
function memoized(s1, s2, i, j) {
    if (i === 0) return j;
    if (j === 0) return i;
    if (dp[i][j] !== -1) return dp[i][j];

    if (s1[i - 1] === s2[j - 1]) {
        return dp[i - 1][j - 1] = memoized(s1, s2, i - 1, j - 1);
    } else {
        dp[i - 1][j] = memoized(s1, s2, i - 1, j);
        dp[i][j - 1] = memoized(s1, s2, i, j - 1);
        return dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
}

function minDistance(s1, s2) {
    const i = s1.length, j = s2.length;
    dp = new Array(i + 1).fill(-1).map(() => new Array(j + 1).fill(-1));
    return memoized(s1, s2, i, j);
}
// Solution ends here
function main() {
    const s1 = "sea", s2 = "eat";
    console.log(minDistance(s1, s2));
}
main();