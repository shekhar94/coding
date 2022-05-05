// Time O(N) space O(N)
var minReorder = function (n, connections) {
    const adjList = new Map();
    const visit = new Set();
    const edges = new Map();
    for (let i = 0; i < n; i++) {
        adjList.set(i, []);
        edges.set(i, []);
    }

    for (let edge of connections) {
        const [a, b] = edge;
        adjList.get(a).push(b);
        adjList.get(b).push(a);
        edges.get(a).push(b);
    }

    let res = 0;
    function dfs(node) {
        const neighbors = adjList.get(node);
        for (let neighbor of neighbors) {
            if (!visit.has(neighbor)) {
                if (!edges.get(neighbor).includes(node)) res++;
                visit.add(neighbor);
                dfs(neighbor);
            }
        }
    }

    visit.add(0);
    dfs(0);
    return res;
};

console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]));