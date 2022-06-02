const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/* 
N -> No of nodes
E -> Total no of edges in the given network
Time: O(N + ElogN)
The max no of vertices that could be added to the pqueue is E.
enqueue and dequeue operations on the priority queue takes O(logE) time.
The val of E can be at most N.(N - 1). 
O(logE) -> O(logN^2) -> O(logN)
complexity for priority queue operations logN

Space:
O(N + E) 

*/
var networkDelayTime = function (times, n, k) {
    const edges = [];
    for (let [u, v, w] of times) {
        if (!edges[u]) edges[u] = [];
        edges[u].push([w, v]);
    }

    let maxPathTill = 0;
    const visit = new Set();
    function bfs() {
        // const pQueue = new MinPriorityQueue({ compare: (a, b) => a[0] > b[0] });
        const pQueue = new MinPriorityQueue(item => item[0]);
        pQueue.enqueue([0, k]);

        while (!pQueue.isEmpty()) {
            const [w, v] = pQueue.dequeue();
            if (visit.has(v)) continue;

            visit.add(v);
            maxPathTill = Math.max(maxPathTill, w);
            const adjNodes = edges[v];
            if (!adjNodes) continue;
            for (let [adjW, adjN] of adjNodes) {
                if (!visit.has(adjN)) pQueue.enqueue([adjW + w, adjN]);
            }
        }
    }
    bfs();
    return visit.size === n ? maxPathTill : -1;
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))