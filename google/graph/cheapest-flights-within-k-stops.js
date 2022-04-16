// Bellman Ford 
// Time O(E*K)
var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
        let tmpPrices = [...prices];
        for (let [s, d, p] of flights) {
            if (prices[s] === Infinity) continue;
            if (prices[s] + p < tmpPrices[d]) tmpPrices[d] = prices[s] + p;
        }
        prices = [...tmpPrices];
    }

    return prices[dst] === Infinity ? -1 : prices[dst];
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1));