var uniquePathsWithObstacles = function (obstacleGrid) {
    const [R, C] = [obstacleGrid.length, obstacleGrid[0].length];
    const dp = new Array(R).fill(-1).map(() => new Array(C).fill(-1));

    function helper(r, c) {
        if (r === R || c === C || obstacleGrid[r][c] === 1) return 0;
        if (r === R - 1 && c === C - 1) return 1;
        if (dp[r][c] !== -1) return dp[r][c];

        return dp[r][c] = helper(r + 1, c) + helper(r, c + 1);
    }

    return helper(0, 0);
};