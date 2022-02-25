// Recursive Approach
function robRecursive(arr, current) {
    if (current < 0) return 0;
    const excluded = robRecursive(arr, current - 1);
    const included = arr[current] + robRecursive(arr, current - 2);
    return Math.max(excluded, included);
}


// DP Approach
let dp = [];

function robDP(arr, current) {
    if (current < 0) return 0;
    if (dp[current] || dp[current] === 0) return dp[current];

    dp[current - 1] = robDP(arr, current - 1);
    dp[current - 2] = robDP(arr, current - 2);

    dp[current] = Math.max(dp[current - 1], arr[current] + dp[current - 2]);

    return dp[current];
}

function rob(arr) {
    dp = [];
    return robDP(arr, arr.length - 1);
}

function main() {
    // const nums = [1, 2, 3, 1];
    const nums = [2, 7, 9, 3, 1];
    // const nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(rob(nums));
}

main();