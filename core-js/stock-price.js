/* 
1. Given stock prices across days optimize the profit
    priceArr = [10, 15, 12, 8, 14]
    problem is based on stock trend track the trend and 
    then buy and sell based on that

    
         15
        /  \         14
      /      12     /
    10        \   /
                8 
    */

function optimizeProfit(priceArr) {
    let i = 1;
    let buyPrice = priceArr[0];
    let sellPrice;
    let totalProfit = 0;
    while (i < priceArr.length) {
        while (buyPrice > priceArr[i]) {
            buyPrice = priceArr[i];
            i++;
        }
        console.log('buy price::', buyPrice);
        sellPrice = priceArr[i];
        i++;
        while(sellPrice < priceArr[i]) {
            sellPrice = priceArr[i];
            i++;
        }
        console.log('sell price::', sellPrice);
        totalProfit += (sellPrice - buyPrice);
        console.log('profit::', totalProfit);
        buyPrice = priceArr[i];
        i++;
    }
    return totalProfit;
}
function main() {
    const priceArr = [10, 15, 12, 8, 14];
    const profit = optimizeProfit(priceArr);
    console.log(profit);
}
main();