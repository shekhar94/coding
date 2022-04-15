// Time O(M*N) Space O(M*N)

var orangesRotting = function (grid) {
    const M = grid.length, N = grid[0].length;
    let fresh = 0;
    let queue = [];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) fresh += 1;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let time = 0;

    function bfs() {
        while (queue.length > 0 && fresh > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const [r, c] = queue.shift();
                for (let direction of directions) {
                    const [di, dj] = direction;
                    const [currR, currC] = [r + di, c + dj];
                    if ((currR < 0 || currC < 0 || currR === M || currC === N) || grid[currR][currC] !== 1) continue;
                    queue.push([currR, currC]);
                    grid[currR][currC] = 2;
                    fresh -= 1;
                }
            }
            time += 1;
        }
        return fresh === 0 ? time : -1;
    }

    return bfs();
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));