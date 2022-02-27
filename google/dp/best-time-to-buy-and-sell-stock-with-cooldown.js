// Recursive Approach: TLE (Memoizing the same recursion passes all the tests)
function recursion(prices, currIdx, bought) {
    if (currIdx >= prices.length) return 0;

    // Below Scenarios we need to consider
    // If hadn't bought then buy at current index or wait to buy
    // If had bought then sell at current index or wait to sell
    let p1 = 0, p2 = 0, p3 = 0; // Init all the scenarios with 0 profit
    if (!bought) p1 = -prices[currIdx] + recursion(prices, currIdx + 1, true); // hadn't bought then buy at current index
    else p2 = prices[currIdx] + recursion(prices, currIdx + 2, false); // bought already then sell at current index

    p3 = recursion(prices, currIdx + 1, bought); // handles wait for both the scenarios
    return Math.max(p1, p2, p3);
}

// Memoized Solution for above recursive approach
let dp;

function memoized(prices, currIdx, bought) {
    if (currIdx >= prices.length) return 0;
    if (dp[currIdx] && dp[currIdx][bought]) return dp[currIdx][bought];

    // init the dp table for indices used for memoization
    if (!dp[currIdx]) dp[currIdx] = [];
    if (!dp[currIdx + 1]) dp[currIdx + 1] = [];
    if (!dp[currIdx + 2]) dp[currIdx + 2] = [];


    let p1 = 0, p2 = 0, p3 = 0; // init partial results with 0
    if (!bought) {
        // hadn't bought then buy at current index
        dp[currIdx + 1][true] = memoized(prices, currIdx + 1, true);
        p1 = -prices[currIdx] + dp[currIdx + 1][true];
    } else {
        // bought already then sell at current index
        dp[currIdx + 2][false] = memoized(prices, currIdx + 2, false);
        p2 = prices[currIdx] + dp[currIdx + 2][false];
    }
    // handles wait for both the scenarios
    dp[currIdx + 1][bought] = memoized(prices, currIdx + 1, bought);
    p3 = dp[currIdx + 1][bought];

    return dp[currIdx][bought] = Math.max(p1, p2, p3);
}


function maxProfit(prices) {
    dp = [];
    return memoized(prices, 0, false);
}

function main() {
    // const prices = [1, 2, 3, 0, 2];
    // const prices = [1];
    // const prices = [1, 2, 4];
    // const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];
    const prices = [2, 1, 4];
    console.log(maxProfit(prices));
}

main();