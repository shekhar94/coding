function bfs(grid, visited, i, j, m, n) {
    const queue = [];
    queue.push([i, j]);
    visited[i][j] = true;
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]; // check in all the directions
    while (queue.length > 0) {
        const [ic, jc] = queue.shift();

        for (let k = 0; k < directions.length; k++) {
            const [ki, kj] = directions[k];
            const [di, dj] = [ic + ki, jc + kj];
            if (di >= 0 && di < m &&
                dj >= 0 && dj < n &&
                !visited[di][dj] &&
                grid[di][dj] === "1") {
                queue.push([di, dj]); visited[di][dj] = true;
            }
        }
    }
}

function numIslands(grid) {
    let m = grid.length, n = grid[0].length;
    const visited = Array(m);
    for (let i = 0; i < m; i++) visited[i] = [];
    let islands = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] === "1") {
                islands++;
                bfs(grid, visited, i, j, m, n);
            }
        }
    }

    return islands;
}

function main() {
    // const grid = [
    //     ["1", "1", "1", "1", "0"],
    //     ["1", "1", "0", "1", "0"],
    //     ["1", "1", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0"]
    // ];
    // const grid = [
    //     ["1", "1", "0", "0", "0"],
    //     ["1", "1", "0", "0", "0"],
    //     ["0", "0", "1", "0", "0"],
    //     ["0", "0", "0", "1", "1"]
    // ];
    // const grid = [["0", "1", "0"], ["1", "0", "1"], ["0", "1", "0"]];
    // const grid = [
    //     ["1", "1", "1"],
    //     ["0", "0", "1"],
    //     ["1", "1", "0"],
    // ]
    console.log(numIslands(grid));
}

main();