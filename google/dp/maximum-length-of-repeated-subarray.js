// Recursive Solution: TLE
let ans;
function lcs(s1, s2, i, j) {
    if (i < 0 || j < 0) return 0;

    let p1 = 0;
    if (s1[i] === s2[j]) {
        p1 = 1 + lcs(s1, s2, i - 1, j - 1);
        ans = Math.max(ans, p1);
    }

    lcs(s1, s2, i - 1, j);
    lcs(s1, s2, i, j - 1);

    return p1;
}
var findLength = function (nums1, nums2) {
    ans = 0;
    lcs(nums1, nums2, nums1.length - 1, nums2.length - 1);
    return ans;
};

// Memoized Recursion
let ans;
function lcsMemo(s1, s2, i, j, dp) {
    if (i < 0 || j < 0) return 0;
    if (dp[i][j] !== -1) return dp[i][j];

    let p1 = 0;
    if (s1[i] === s2[j]) {
        p1 = 1 + lcsMemo(s1, s2, i - 1, j - 1, dp);
        ans = Math.max(ans, p1);
    }
    lcsMemo(s1, s2, i - 1, j, dp);
    lcsMemo(s1, s2, i, j - 1, dp);

    return dp[i][j] = p1;
}

var findLength = function (nums1, nums2) {
    ans = 0;
    const m = nums1.length, n = nums2.length;
    const dp = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    lcsMemo(nums1, nums2, m - 1, n - 1, dp);
    return ans;
};
