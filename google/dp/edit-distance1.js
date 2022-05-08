var minDistance = function (s1, s2) {
    const [l1, l2] = [s1.length, s2.length];
    const dp = new Array(l1 + 1).fill(-1).map(() => new Array(l2 + 1).fill(-1));

    function helper(i, j) {
        if (i === 0) return j;
        if (j === 0) return i;
        if (dp[i][j] !== -1) return dp[i][j];

        if (s1[i - 1] === s2[j - 1]) return dp[i][j] = helper(i - 1, j - 1);
        return dp[i][j] = 1 + Math.min(
            helper(i - 1, j),
            helper(i, j - 1),
            helper(i - 1, j - 1),
        );
    }

    return helper(l1, l2);
}

console.log(minDistance("intention", "execution"));