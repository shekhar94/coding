// Time O(M*N) Space O(M*N)
var longestIncreasingPath = function (matrix) {
    const M = matrix.length, N = matrix[0].length;
    const dp = new Array(M).fill(-1).map(() => new Array(N).fill(-1));

    function dfs(i, j, prevVal) {
        if (i < 0 || j < 0 || i === M || j === N || matrix[i][j] <= prevVal) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        let res = 1;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let direction of directions) {
            const [di, dj] = direction;
            res = Math.max(res, 1 + dfs(i + di, j + dj, matrix[i][j]));
        }
        return dp[i][j] = res;
    }

    let res = -1;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            res = Math.max(res, dfs(i, j, -1));
        }
    }
    return res;
};

console.log(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]]));