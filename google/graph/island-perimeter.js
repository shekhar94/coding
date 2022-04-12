function bfs(grid, r, c, m, n) {
    const visited = new Set();
    const queue = [];
    queue.push([r, c]);
    visited.add(`${r}-${c}`);
    let res = 0;
    const adjCells = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length) {
        const [i, j] = queue.shift();
        for (let adjCell of adjCells) {
            const [ai, aj] = adjCell;
            const row = i + ai, col = j + aj;
            if (!visited.has(`${row}-${col}`)) {
                if (row < m && row >= 0 && col < n && col >= 0 && grid[row][col]) {
                    queue.push([row, col]);
                    visited.add(`${row}-${col}`);
                } else res++;
            }
        }
    }
    return res;
}

var islandPerimeter = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return bfs(grid, i, j, m, n);
            }
        }
    }
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));