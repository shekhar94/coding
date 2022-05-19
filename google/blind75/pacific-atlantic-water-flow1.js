// Time O(R*C) Space: O(R*C)
var pacificAtlantic = function (heights) {
    const [R, C] = [heights.length, heights[0].length];

    const pac = new Array(R).fill(false).map(() => new Array(C).fill(false));
    const atl = new Array(R).fill(false).map(() => new Array(C).fill(false));

    function dfs(r, c, visit, prev) {
        if (r < 0 || c < 0 || r === R || c === C || visit[r][c]) return;

        if (heights[r][c] >= prev) {
            visit[r][c] = true;
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        }
    }

    for (let r = 0; r < R; r++) {
        dfs(r, 0, pac, heights[r][0]);
        dfs(r, C - 1, atl, heights[r][C - 1]);
    }

    for (let c = 0; c < C; c++) {
        dfs(0, c, pac, heights[0][c]);
        dfs(R - 1, c, atl, heights[R - 1][c]);
    }

    const res = [];
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (pac[r][c] && atl[r][c]) res.push([r, c]);
        }
    }

    return res;
};