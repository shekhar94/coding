function checkPalindrome(str, i, j) {
    while (i <= j) {
        if (str[i] !== str[j]) return false;
        i++; j--;
    }
    return true;
}

// Without dp solution
function countSubstrings(str) {
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (checkPalindrome(str, i, j)) ans++;
        }
    }
    return ans;
}

// With DP efficient solution
function countSubstringsDP(str) {
    const dp = Array(str.length);
    for (let i = 0; i < str.length; i++) {
        dp[i] = Array(str.length).fill(false);
    }

    let ans = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (i === j || (i - 1 >= 0 && j + 1 < str.length && dp[i - 1] && dp[i - 1][j + 1])) {
                dp[i][j] = true;
            } else dp[i][j] = checkPalindrome(str, i, j);

            if (dp[i][j]) ans++;
        }
    }
    return ans;
}

function main() {
    // const str = "aaa";
    // const str = "abc";
    const str = "abaaba";
    // console.log(checkPalindrome(str, 0, str.length))
    // console.log(countSubstrings(str, 0, str.length));
    console.log(countSubstringsDP(str));
}

main();