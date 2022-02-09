// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
function maxProfit(prices) {
    const len = prices.length;
    let profit = 0;
    let buyIndex = -1;
    let i = 0;

    if (len === 1) return profit;

    while (i <= len - 2) {
        const isInUpTrend = prices[i] < prices[i + 1];
        const isInDownTrend = prices[i] > prices[i + 1];

        // price moving up
        if (isInUpTrend && buyIndex === -1) buyIndex = i; // not bought yet

        // price moving down
        if (isInDownTrend && buyIndex !== -1) {
            // bought already
            profit += prices[i] - prices[buyIndex];
            buyIndex = -1;
        }
        i++;
    }

    if (buyIndex !== -1) {
        profit += prices[i] - prices[buyIndex];
    }

    return profit;
}

function main() {
    const ip_arr = [7, 1, 5, 3, 6, 4]; // 7
    // const ip_arr = [7, 6, 4, 3, 1]; // 0
    // const ip_arr = [1, 2, 3, 4, 5]; // 4
    // const ip_arr = [5, 4, 3, 2, 1];
    // const ip_arr = [1, 2, 3, 4, 5, 5, 6]; // 4
    // const ip_arr = [1, 2];
    // const ip_arr = [2, 1, 4];

    console.log(maxProfit(ip_arr));
}

main();



