// Time O(N*2) Space O(N*2) -> visit,queue
class ShortestBridge {
    constructor(grid) {
        this.grid = grid;
        this.N = grid.length;
        this.visit = new Set();
        this.directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    }

    getKey({ i, j }) {
        return `${i}-${j}`;
    }

    parseKey(key) {
        return key.split('-').map(Number);
    }

    isOutOfBound({ i, j }) {
        const N = this.N;
        return i < 0 || j < 0 || i >= N || j >= N;
    }

    dfs({ i, j }) {
        if (this.isOutOfBound({ i, j }) || !this.grid[i][j] || this.visit.has(this.getKey({ i, j }))) return;

        this.visit.add(this.getKey({ i, j }));
        for (let direction of this.directions) {
            const [di, dj] = direction;
            this.dfs({ i: i + di, j: j + dj });
        }
    }

    bfs() {
        const queue = [...this.visit];
        let level = 0;
        while (queue.length > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                const [r, c] = this.parseKey(curr);
                for (let direction of this.directions) {
                    const [di, dj] = direction;
                    const [currR, currC] = [r + di, c + dj];
                    const key = this.getKey({ i: currR, j: currC });
                    if (!this.isOutOfBound({ i: currR, j: currC }) && !this.visit.has(key)) {
                        if (this.grid[currR][currC]) return level;
                        queue.push(key);
                        this.visit.add(key);
                    }
                }
            }
            level += 1;
        }
        return level;
    }

    shortestBridge() {
        const N = this.N;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (this.grid[i][j]) {
                    this.dfs({ i, j }); // Add all the nodes in first island to visited 
                    return this.bfs();
                }
            }
        }
    }
}

var shortestBridge = function (grid) {
    const sb = new ShortestBridge(grid);
    return sb.shortestBridge();
};

console.log(shortestBridge([[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]));
console.log(shortestBridge([[0, 1, 0], [0, 0, 0], [0, 0, 1]]));