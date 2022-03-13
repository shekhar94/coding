// Javascript | Cycle Detection | DFS | O(V+E) | Recursive
function dfs(adjList, visited, node, prev) {
    if (visited.has(node)) return false; // loop detected

    visited.add(node);
    const adj = adjList[node];
    for (let i = 0; i < adj.length; i++) {
        if (adj[i] === prev) continue; // If previous node is getting revisited don't run dfs
        if (!dfs(adjList, visited, adj[i], node)) return false;
    }

    return true;
}


var validTree = function (n, edges) {
    const adjList = new Array(n).fill(0).map(() => new Array());
    const visited = new Set();

    for (let i = 0; i < edges.length; i++) {
        const [ai, bi] = edges[i];
        adjList[ai].push(bi);
        adjList[bi].push(ai);
    }
    if (!dfs(adjList, visited, 0, -1)) return false;
    return visited.size === n;
};

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));