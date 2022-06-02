class PriorityQueue {
    constructor() {
        this.arr = ['unused'];
        this.size = 0;
    }

    increaseValue(idx, val) {
        const [cost,] = val; // [cost, node]
        const [c,] = this.arr[idx];
        if (cost < c) return;
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

function prim(adjList, n) {
    const pQueue = new PriorityQueue();
    const visited = new Set();
    let minCost = 0;
    pQueue.insert([0, 0]); // [cost, node]

    while (visited.size < n) {
        const [cost, node] = pQueue.extractMin();
        if (visited.has(node)) continue;

        minCost += cost;
        visited.add(node);

        const adjNodes = adjList.get(node);
        for (let i = 0; i < adjNodes.length; i++) {
            const [c, n] = adjNodes[i];
            if (!visited.has(n)) pQueue.insert([c, n]);
        }
    }

    return minCost;
}


function generateAdjList(points, n, adjList) {
    for (let i = 0; i < n; i++) {
        adjList.set(i, []);
        const [sx, sy] = points[i];
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const [tx, ty] = points[j];
            const cost = Math.abs(sx - tx) + Math.abs(sy - ty);
            adjList.get(i).push([cost, j]);
        }
    }
}

function minCostConnectPoints(points) {
    let adjList = new Map();
    let n = points.length;
    generateAdjList(points, n, adjList);
    return prim(adjList, n);
}

function main() {
    let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
    // let points = [[3, 12], [-2, 5], [-4, 1]];

    console.log(minCostConnectPoints(points));
}

main();