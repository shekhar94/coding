// O(E+V)

function dfs({ i, safe, graph }) {
    if (safe.has(i)) return safe.get(i);

    safe.set(i, false);
    for (let j = 0; j < graph[i].length; j++) {
        if (!dfs({ i: graph[i][j], safe, graph })) return false;
    }

    safe.set(i, true);
    return true;
}

var eventualSafeNodes = function (graph) {
    const n = graph.length;
    const safe = new Map();

    const res = [];
    for (let i = 0; i < n; i++) {
        if (dfs({ i, safe, graph })) {
            res.push(i);
        }
    }

    return res;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));