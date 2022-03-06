class PriorityQueue {
    constructor() {
        this.arr = ['unused'];
        this.size = 0;
    }

    increaseValue(idx, val) {
        const [path,] = val;
        const [p,] = this.arr[idx];
        if (path < p) return;
        this.arr[idx] = val;
        while (idx > 1 && this.arr[Math.floor(idx / 2)][0] >= this.arr[idx][0]) {
            [this.arr[idx], this.arr[Math.floor(idx / 2)]] = [this.arr[Math.floor(idx / 2)], this.arr[idx]]; // swap
            idx = Math.floor(idx / 2);
        }
    }

    insert(val) {
        this.size += 1;
        this.arr[this.size] = [-1];
        this.increaseValue(this.size, val);
    }

    isEmpty() {
        return this.size === 0;
    }

    minHeapify(idx) {
        const left = 2 * idx;
        const right = 2 * idx + 1;
        let smallest;
        if (left <= this.size && this.arr[left][0] < this.arr[idx][0]) {
            smallest = left;
        } else smallest = idx;

        if (right <= this.size && this.arr[right][0] < this.arr[smallest][0]) {
            smallest = right;
        }
        if (smallest !== idx) {
            [this.arr[idx], this.arr[smallest]] = [this.arr[smallest], this.arr[idx]];
            this.minHeapify(smallest);
        }
    }

    extractMin() {
        if (this.isEmpty()) return -1;
        const min = this.arr[1];
        this.arr[1] = this.arr[this.size];
        this.size -= 1;
        this.minHeapify(1);
        return min;
    }
}

function bfs(edges, visited, n, source) {
    const priority_queue = new PriorityQueue();
    priority_queue.insert([0, source]);
    let maxPathTill = 0;
    let visitedCount = 0;

    while (!priority_queue.isEmpty()) {
        const [path, target] = priority_queue.extractMin();
        if (visited[target]) continue;
        visited[target] = true; visitedCount++;
        maxPathTill = Math.max(maxPathTill, path);

        if (edges[target] && edges[target].length > 0) {
            const cnodes = edges[target]; // connected nodes
            for (let i = 0; i < cnodes.length; i++) {
                const [tnode, weight] = cnodes[i]; // target node and path weight
                if (!visited[tnode]) {
                    priority_queue.insert([path + weight, tnode]);
                }
            }
        }
    }
    return visitedCount === n ? maxPathTill : -1;
}

function networkDelayTime(times, n, k) {
    const visited = Array(101);
    const edges = Array(101);

    for (let i = 0; i < times.length; i++) {
        const [ui, vi, wi] = times[i];
        if (!edges[ui]) edges[ui] = [];
        edges[ui].push([vi, wi]);
    }

    return bfs(edges, visited, n, k);
}

function main() {
    // const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2
    // const times = [[1, 2, 1]], n = 2, k = 1;
    // const times = [[1, 2, 1]], n = 2, k = 2
    // const times = [[1, 2, 1], [2, 3, 2], [1, 3, 2]], n = 3, k = 1; // 2
    // const times = [[1, 2, 1], [2, 3, 2], [1, 3, 4]], n = 3, k = 1;
    // const times = [[1, 2, 6], [3, 1, 10], [1, 4, 1], [4, 2, 1], [1, 3, 2], [2, 4, 2], [4, 3, 1], [2, 3, 1], [3, 4, 2]], n = 4, k = 1;
    const times = [[4, 3, 76], [1, 4, 70], [1, 3, 37], [1, 2, 53], [3, 2, 66], [3, 4, 22], [5, 4, 52], [2, 1, 23], [5, 1, 27], [4, 5, 88], [5, 2, 26], [2, 4, 41], [4, 2, 66], [4, 1, 93], [3, 5, 78], [2, 5, 9], [5, 3, 50], [3, 1, 17], [1, 5, 12], [2, 3, 87]], n = 5, k = 5;

    console.log(networkDelayTime(times, n, k));
}

main();