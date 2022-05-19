var stoneGame = function (piles) {
    const dp = new Array(piles.length).fill(-1).map(() => new Array(piles.length).fill(-1));
    // Total stones alice can collect
    function dfs(l, r) {
        if (l > r) return 0;
        if (dp[l][r] !== -1) return dp[l][r];

        let [left, right] = [0, 0];
        const rem = (right - left) / 2;
        // only even is alice turn
        if (!rem) [left, right] = [piles[l], piles[r]];

        return dp[l][r] = Math.max(
            left + dfs(l + 1, r),
            right + dfs(l, r - 1)
        );
    }
    const total = piles.reduce((sum, val) => sum + val);
    return dfs(0, piles.length - 1) > Math.floor(total / 2);
}