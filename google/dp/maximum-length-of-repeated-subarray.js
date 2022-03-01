
// Recursive approach
function lcs(s1, s2, i, j, count) {
    if (i < 0 || j < 0) return count;

    let p1 = count;
    if (s1[i] === s2[j]) p1 = lcs(s1, s2, i - 1, j - 1, count + 1);
    return Math.max(
        p1,
        lcs(s1, s2, i - 1, j, 0),
        lcs(s1, s2, i, j - 1, 0)
    );
}

// Memoized recursion
let dp = [];
let ans = 0;
function lcsMemo(s1, s2, i, j) {
    if (i < 0 || j < 0) return 0;
    if (dp[i] && (dp[i][j] || dp[i][j] === 0)) return dp[i][j];

    if (!dp[i]) dp[i] = [];

    let p1 = 0; // Set dp[i][j] to 0 if there is no match
    if (s1[i] === s2[j]) {
        p1 = 1 + lcsMemo(s1, s2, i - 1, j - 1);
        ans = Math.max(ans, p1);
    }
    lcsMemo(s1, s2, i - 1, j);
    lcsMemo(s1, s2, i, j - 1);

    return dp[i][j] = p1;
}

function main() {
    // const nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7];
    const nums1 = [0, 0, 0, 0, 0], nums2 = [0, 0, 0, 0, 0];
    // const nums1 = [5, 14, 53, 80, 48], nums2 = [50, 47, 3, 80, 83];
    // const nums1 = [0, 1, 1, 1, 1], nums2 = [1, 0, 1, 0, 1];
    // const nums1 = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], nums2 = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    dp = [];
    ans = 0;
    // let t = lcs(nums1, nums2, nums1.length - 1, nums2.length - 1, 0);
    lcsMemo(nums1, nums2, nums1.length - 1, nums2.length - 1);

    console.log(ans);
}

main();