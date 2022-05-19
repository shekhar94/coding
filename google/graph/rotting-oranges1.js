// // Time O(M*N) Space O(M*N)
var orangesRotting = function (grid) {
    const [R, C] = [grid.length, grid[0].length];
    const queue = [];

    let fresh = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1) fresh++;
            if (grid[r][c] === 2) queue.push([r, c]);
        }
    }

    function bfs() {
        let time = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while (queue.length && fresh) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const [r, c] = queue.shift();
                for (let [dr, dc] of directions) {
                    const [cr, cc] = [r + dr, c + dc];
                    if (cr >= 0 && cc >= 0 && cr < R && cc < C &&
                        grid[cr][cc] === 1) {
                        grid[cr][cc] = 2;
                        fresh -= 1;
                        queue.push([cr, cc]);
                    }
                }
            }
            time++;
        }
        return time;
    }
    const time = bfs();
    return fresh === 0 ? time : -1;
};