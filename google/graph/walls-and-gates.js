// Time and Space O(MN)
var wallsAndGates = function (rooms) {
    const [R, C] = [rooms.length, rooms[0].length];
    const queue = [];
    const visit = new Set();

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (rooms[r][c] === 0) {
                queue.push([r, c]);
                visit.add(`${r}-${c}`);
            }
        }
    }

    function bfs() {
        let level = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const [r, c] = queue.shift();
                rooms[r][c] = level;
                for (let [dr, dc] of directions) {
                    const [nr, nc] = [r + dr, c + dc];
                    const key = `${nr}-${nc}`;
                    if (nr < 0 || nc < 0 || nr === R || nc === C || visit.has(key) || rooms[nr][nc] !== 2147483647) continue;
                    visit.add(key);
                    queue.push([nr, nc]);
                }
            }
            level += 1;
        }
    }
    bfs();
};