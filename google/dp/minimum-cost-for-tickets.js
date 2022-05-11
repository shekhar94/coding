// O(W), where W = 365W=365 is the maximum numbered day in your travel plan.
var mincostTickets = function (days, costs) {
    function getNextIndex(daysCovered, currIndex) {
        const nextDay = days[currIndex] + daysCovered;
        let i;
        for (i = currIndex + 1; i < days.length; i++) {
            if (days[i] >= nextDay) break;
        }
        return i;
    }

    const dp = new Array(days.length).fill(-1);
    const daysCov = [1, 7, 30];
    function helper(idx) {
        if (idx === days.length) return 0;
        if (dp[idx] !== -1) return dp[idx];

        let p = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < costs.length; i++) {
            p = Math.min(p, costs[i] + helper(getNextIndex(daysCov[i], idx)));
        }
        return dp[idx] = p;
    }
    return helper(0);
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]));