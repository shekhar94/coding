package google.array;

public class BestTimeToBuyAndSellStock {

    private int maxProfit(int[] prices) {
        int len = prices.length;
        int profit = 0;
        int buyIndex = -1;
        int currentIndex = 0;

        if (len == 1) return profit;

        while(currentIndex < len - 1) {
            boolean isInUpTrend = prices[currentIndex] < prices[currentIndex+1];
            boolean isInDownTrend = prices[currentIndex] > prices[currentIndex+1];

            if (isInUpTrend && buyIndex == -1) {
                // not bought yet
                buyIndex = currentIndex;
            }

            if (isInDownTrend && buyIndex != -1) {
                // already bought
                profit += prices[currentIndex] - prices[buyIndex];
                buyIndex = -1;
            }

            currentIndex++;
        }

        if (buyIndex != -1) {
            profit += prices[currentIndex] - prices[buyIndex];
        }

        return profit;
    }

    public static void main(String[] args) {
        BestTimeToBuyAndSellStock bestTimeToBuyAndSellStock = new BestTimeToBuyAndSellStock();
        // int prices[] = {7, 1, 5, 3, 6, 4}; // 7
        // int prices[] = {7, 6, 4, 3, 1}; // 0
        // int prices[] = {1, 2, 3, 4, 5}; // 4
        // int prices[] = {5, 4, 3, 2, 1};
        // int prices[] = {1, 2, 3, 4, 5, 5, 6}; // 5
        // int prices[] = {1, 2};
        int[] prices = {2, 1, 4};
        System.out.println(bestTimeToBuyAndSellStock.maxProfit(prices));
    }
}
