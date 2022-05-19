// // Time O(M*N) | Space O(M*N)
var maxAreaOfIsland = function (grid) {
    const [R, C] = [grid.length, grid[0].length];
    const visit = new Set();

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    function dfs(r, c) {
        if (r < 0 || c < 0 || r === R || c === C || grid[r][c] === 0 || visit.has(`${r}-${c}`)) return 0;

        let area = 1
        visit.add(`${r}-${c}`);
        for (let [dr, dc] of directions) {
            area += dfs(r + dr, c + dc);
        }
        return area;
    }
    let maxArea = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            maxArea = Math.max(dfs(r, c), maxArea);
        }
    }
    return maxArea;
};