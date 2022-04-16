// Time O(M*N) | Space O(M*N)
var maxAreaOfIsland = function (grid) {
    const [M, N] = [grid.length, grid[0].length];
    const visit = new Array(M).fill(false).map(() => new Array(N).fill(false));

    function dfs(r, c) {
        if (r < 0 || c < 0 || r === M || c === N || grid[r][c] === 0 || visit[r][c]) return 0;

        visit[r][c] = true;
        return (1 +
            dfs(r + 1, c) +
            dfs(r - 1, c) +
            dfs(r, c + 1) +
            dfs(r, c - 1)
        );
    }

    let area = 0;
    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            area = Math.max(area, dfs(r, c));
        }
    }

    return area;
};

console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));