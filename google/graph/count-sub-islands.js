var countSubIslands = function (grid1, grid2) {
    const [R, C] = [grid1.length, grid1[0].length];
    const visit = new Array(R).fill(false).map(() => new Array(C).fill(false));

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    function dfs(r, c) {
        if (r === R || c === C || r < 0 || c < 0 || grid2[r][c] === 0 || visit[r][c]) return true;

        visit[r][c] = true;
        let res = true;
        if (grid1[r][c] === 0) res = false;

        for (let direction of directions) {
            const [dr, dc] = direction;
            const [r1, c1] = [r + dr, c + dc];
            res = dfs(r1, c1) && res; // order is important
        }
        return res;
    }

    let res = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid2[r][c] && !visit[r][c] && dfs(r, c)) {
                res += 1;
            }
        }
    }

    return res;
};

console.log(countSubIslands([[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]],
    [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]))