var longestIncreasingPath = function (matrix) {
    const [R, C] = [matrix.length, matrix[0].length];
    const dp = new Array(R).fill(-1).map(() => new Array(C).fill(-1));

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    function dfs(r, c, prev) {
        if (r < 0 || c < 0 || r === R || c === C || matrix[r][c] <= prev) return 0;
        if (dp[r][c] !== -1) return dp[r][c];

        let max = 1;
        for (let [rd, cd] of directions) {
            max = Math.max(1 + dfs(r + rd, c + cd, matrix[r][c]), max);
        }
        return dp[r][c] = max;
    }

    let res = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            res = Math.max(dfs(r, c, -1), res);
        }
    }

    return res;
};