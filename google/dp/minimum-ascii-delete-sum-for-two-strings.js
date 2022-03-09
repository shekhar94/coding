function getAsciiSum(s, end) {
    let sum = 0;
    for (let i = end; i >= 0; i--) {
        sum += s[i].charCodeAt(0);
    }
    return sum;
}
// Recursive Approach: TLE
function recursive(s1, s2, m, n) {
    if (m === 0) return getAsciiSum(s2, n - 1);
    if (n === 0) return getAsciiSum(s1, m - 1);

    let p1 = Number.MAX_SAFE_INTEGER;
    if (s1[m - 1] === s2[n - 1]) p1 = recursive(s1, s2, m - 1, n - 1);

    return Math.min(
        p1,
        s1[m - 1].charCodeAt(0) + recursive(s1, s2, m - 1, n),
        s2[n - 1].charCodeAt(0) + recursive(s1, s2, m, n - 1)
    );

}

// Memoized recursion
let dp;
function memoized(s1, s2, m, n) {
    if (m === 0) return getAsciiSum(s2, n - 1);
    if (n === 0) return getAsciiSum(s1, m - 1);

    if (dp[m][n] !== -1) return dp[m][n];

    let p1 = Number.MAX_SAFE_INTEGER, p2, p3;
    // Even when there is a match we need to look for the scenario of deleting current char from s1 and s2
    // So returning from here will not yield the right result
    // (When there is some wait for each operation this code format will yield the right result)
    // But in case all the operations are having same weight we can return from the recursion if a match is found
    if (s1[m - 1] === s2[n - 1]) {
        p1 = memoized(s1, s2, m - 1, n - 1);
    }
    p2 = s1[m - 1].charCodeAt(0) + memoized(s1, s2, m - 1, n); // delete from s1
    p3 = s2[n - 1].charCodeAt(0) + memoized(s1, s2, m, n - 1); // delete from s2
    return dp[m][n] = Math.min(p1, p2, p3);

}
function minimumDeleteSum(s1, s2) {
    const m = s1.length, n = s2.length;
    dp = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    return memoized(s1, s2, m, n);

}
// Solution ends here

function main() {
    // const s1 = "sea", s2 = "eat";
    const s1 = "delete", s2 = "leet";
    console.log(minimumDeleteSum(s1, s2));
}

main();