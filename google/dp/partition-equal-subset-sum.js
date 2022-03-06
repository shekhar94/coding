// Recursive approach
function recursive(arr, target, i) {
    if (i === arr.length - 1 && target !== 0) return false;
    if (target === 0) return true;

    const p1 = recursive(arr, target - arr[i], i + 1);
    const p2 = recursive(arr, target, i + 1);
    return (p1 || p2);
}

// Memoized recursion
let dp = [];
function memoized(arr, target, i) {
    if (i === arr.length - 1 && target !== 0) return false;
    if (target === 0) return true;
    if (dp[i][target] !== -1) return dp[i][target];

    const p1 = memoized(arr, target - arr[i], i + 1);
    const p2 = memoized(arr, target, i + 1);
    return dp[i][target] = (p1 || p2);
}

function canPartition(arr) {
    const len = arr.length;

    let target = arr.reduce((acc, val) => {
        acc += val;
        return acc;
    }, 0);
    if (target % 2) return false;
    target = target / 2;
    dp = new Array(len + 1).fill(-1).map(() => new Array(target + 1).fill(-1));
    return recursion(arr, target, 0);
}

function main() {
    const nums = [1, 5, 11, 5];
    // const nums = [1, 2, 3, 5];
    console.log(canPartition(nums));
}

main();