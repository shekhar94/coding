
// Time O((E+V)^2) or O(E^2)  |||||| Space O(E^2) (Callstack -> E, Map -> E)
var findItinerary = function (tickets) {
    const adjList = new Map();
    tickets.sort((a, b) => a[1].localeCompare(b[1]));

    for (let ticket of tickets) {
        const [src, dest] = ticket;
        if (!adjList.has(src)) adjList.set(src, []);
        adjList.get(src).push(dest);
    }

    const res = ["JFK"];

    function dfs(src) {
        if (res.length === tickets.length + 1) return true
        if (!adjList.has(src)) return false;

        const adjNodes = new Array(...adjList.get(src));
        for (let i = 0; i < adjNodes.length; i++) {
            const adj = adjNodes[i];
            adjList.get(src).splice(i, 1);
            res.push(adj);
            if (dfs(adj)) return true;

            // backtracking
            adjList.get(src).splice(i, 0, adj);
            res.pop();
        }
        return false;
    }

    dfs("JFK");
    return res;
};

// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));