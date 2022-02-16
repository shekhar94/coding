
// Recursive solution TLE
function longestA(arr, prev, curr, step) {
    if (curr > arr.length - 1) return 0;
    if (arr[curr] - arr[prev] === step) {
        return 1 + longestA(arr, curr, curr + 1, step);
    } else return longestA(arr, prev, curr + 1, step);
}

function longestArithSeqLength(arr) {
    if (arr.length === 2) return 2;
    let longest = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const step = arr[j] - arr[i];
            const prev = j;
            let len = 2;
            len += longestA(arr, prev, j + 1, step);
            longest = Math.max(longest, len);
        }
    }
    return longest;
}

// DP solution efficient
function longestArithSeqLengthDP(arr) {
    let longest = 2, len = arr.length;
    const dp = Array(len)
    for (let i = 0; i < len; i++) {
        // initialize the longest subsequence for all diff values to 0
        dp[i] = Array(1002).fill(0);
    }
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            // scale up by 500 as the diff could be -ve and we don't have -ve index in dp[i]
            const diff = arr[j] - arr[i] + 500;
            // dp[j][diff] is longest subsequence with difference "diff" ending at index j
            dp[j][diff] = Math.max(2, dp[i][diff] + 1);
            longest = Math.max(longest, dp[j][diff])
        }
    }
    return longest;
}

function main() {
    // const nums = [9, 4, 7, 2, 10];
    const nums = [20, 1, 15, 3, 10, 5, 8];
    // const nums = [3, 6, 9, 12];
    // const nums = [16, 6, 1, 0, 45, 56, 98, 100, 51, 83, 76, 14];
    // const nums = [83, 20, 17, 43, 52, 78, 68, 45];
    console.log(longestArithSeqLengthDP(nums));
}

main();