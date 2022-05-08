
var longestPalindrome = function (s) {
    const dp = new Array(s.length).fill(-1).map(() => new Array(s.length).fill(-1));
    const len = s.length;
    function isPalindrome(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++; r--;
        }
        return true;
    }
    function lps(i, j) {
        if (i === j) return dp[i][j] = 1;
        if (dp[i][j] !== -1) return dp[i][j];
        if (isPalindrome(i, j)) return dp[i][j] = j - i + 1;
        return dp[i][j] = Math.max(0 + lps(i + 1, j), 0 + lps(i, j - 1));
    }
    lps(0, len - 1);
    let maxLen = 0, r, c;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (maxLen < dp[i][j]) {
                maxLen = dp[i][j];
                c = j;
            }
        }
    }
    console.log(dp);
    return s.substring(c - maxLen + 1, c + 1);
}

// longest palindromic substring fastest
// O(n2) 
var longestPalindrome = function (s) {
    const len = s.length;
    let maxLen = 0;
    let res = '';
    for (let i = 0; i < len; i++) {
        // odd length strings: Expanding out
        let [l, r] = [i, i];
        while (l > -1 && r < len && s[l] === s[r]) {
            if (maxLen < r - l + 1) {
                maxLen = r - l + 1;
                res = s.substring(l, r + 1);
            }
            l--; r++;
        }

        // Even length strings
        [l, r] = [i, i + 1];
        while (l > -1 && r < len && s[l] === s[r]) {
            if (maxLen < r - l + 1) {
                maxLen = r - l + 1;
                res = s.substring(l, r + 1);
            }
            l--; r++;
        }
    }
    return res;
}
console.log(longestPalindrome1("aacabdkacaa"));