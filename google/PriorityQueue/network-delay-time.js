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
        edges[u].push([v, w]);
    }

    function bfs() {
        // { compare: (a, b) => a[0] > b[0] }
        const pQueue = new MinPriorityQueue(item => item[1]);
        const visit = new Set();
        pQueue.enqueue([k, 0]);
        let maxPathTill = 0;

        while (!pQueue.isEmpty()) {
            const [node, w] = pQueue.dequeue();
            if (visit.has(node)) continue;
            visit.add(node);
            maxPathTill = Math.max(maxPathTill, w);
            if (edges[node]) {
                const adjNodes = edges[node];
                for (let [adjNode, adjW] of adjNodes) {
                    if (!visit.has(adjNode)) pQueue.enqueue([adjNode, w + adjW])
                }
            }
        }
        return visit.size === n ? maxPathTill : -1;
    }

    return bfs()
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))