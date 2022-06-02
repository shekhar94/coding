// Time O(2^n)  Space: O(2^n)
var allPossibleFBT = function (n) {
    const dp = new Array(n);
    dp[0] = []; dp[1] = [new TreeNode()];

    function backtrack(n) {
        if (dp[n]) return dp[n];

        const res = [];
        for (let l = 0; l < n; l++) {
            const [leftTrees, rightTrees] = [backtrack(l), backtrack(n - l - 1)];
            for (let left of leftTrees) {
                for (let right of rightTrees) {
                    res.push(new TreeNode(0, left, right));
                }
            }
        }
        return dp[n] = res;
    }
    return backtrack(n);
};