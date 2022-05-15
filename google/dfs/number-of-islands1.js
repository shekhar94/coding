var numIslands = function (grid) {
    const [R, C] = [grid.length, grid[0].length];
    const visit = new Array(R).fill(false).map(() => new Array(C).fill(false));

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    function dfs(r, c) {
        if (r < 0 || c < 0 || r === R || c === C || visit[r][c] || grid[r][c] === "0") return;

        visit[r][c] = true;
        for (let [di, dj] of directions) {
            [rc, cc] = [r + di, c + dj];
            dfs(rc, cc);
        }
    }

    let res = 0;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (!visit[i][j] && grid[i][j] !== "0") {
                dfs(i, j);
                res += 1;
            }
        }
    }

    return res;
};