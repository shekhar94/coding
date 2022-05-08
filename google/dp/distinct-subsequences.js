var numDistinct = function (s, t) {
    let [l1, l2] = [s.length, t.length];
    const dp = new Array(l1 + 1).fill(-1).map(() => new Array(l2 + 1).fill(-1));

    function helper(i, j) {
        if (j === 0) return 1
        if (i === 0) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        let cnt = 0;
        if (s[i - 1] === t[j - 1]) cnt += helper(i - 1, j - 1);

        return dp[i][j] = cnt + helper(i - 1, j);
    }

    return helper(l1, l2);
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));