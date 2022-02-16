function maxProfit(prices) {
    const len = prices.length;
    // minBuy keeps track of min price till the current index(left to right)
    // maxSell keeps track of maximun price found till the current index (right to left)
    const minBuy = Array(len), maxSell = Array(len);

    minBuy[0] = prices[0]; // only buying is possible on the first day
    maxSell[len - 1] = prices[len - 1]; // only selling is possible on the last day

    for (let i = 1; i < len; i++) {
        minBuy[i] = Math.min(prices[i], minBuy[i - 1]);
        maxSell[len - (i + 1)] = Math.max(prices[len - (i + 1)], maxSell[len - i]);
    }

    let profit = 0;
    for (let i = 0; i < len; i++) {
        profit = Math.max(profit, maxSell[i] - minBuy[i])
    }
    return profit;
}

function main() {
    const prices = [7, 1, 5, 3, 6, 4]
    console.log(maxProfit(prices));
}

main();