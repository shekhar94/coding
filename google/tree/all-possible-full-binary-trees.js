// Time O(2^n)  Space: O(2^n)
var allPossibleFBT = function (n) {
    const dp = new Array(n);
    dp[0] = [];
    dp[1] = [new TreeNode()];


    function backtrack(n) {
        if (dp[n]) return dp[n];

        let res = [];
        for (let l = 0; l < n; l++) {
            const [left, right] = [backtrack(l), backtrack(n - 1 - l)];
            for (let t1 of left) {
                for (let t2 of right) {
                    res.push(new TreeNode(0, t1, t2));
                }
            }
        }
        return dp[n] = res;
    }
    return backtrack(n);
};