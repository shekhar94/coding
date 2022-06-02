// Performing DFS on a directed acyclic graph and sorting the vertices
// in descending order of finish times gives a topological ordering of vertices.
/* 
Time: O(C) c -> total length of all the the words added together
Space: O(1)
O(U+min(U^2, N))
Adj List O(V + E) v - no of unique letters, E -> number of relations
O(26^2) => O(1)
*/


var alienOrder = function (words) {
    const adjList = new Map();
    for (let w of words) {
        for (let c of w) adjList.set(c, new Set());
    }
    for (let i = 0; i < words.length - 1; i++) {
        const [w1, w2] = [words[i], words[i + 1]];
        const minLen = Math.min(w1.length, w2.length);
        if (w1.length > w2.length && w1.substring(0, minLen) === w2) return "";
        for (let k = 0; k < minLen; k++) {
            if (w1[k] !== w2[k]) {
                adjList.get(w1[k]).add(w2[k]);
                break;
            }
        }
    }

    const visit = new Map();
    const res = [];
    function dfs(c) {
        if (visit.has(c)) return visit.get(c);

        visit.set(c, true);
        for (let nei of [...(adjList.get(c) || [])]) {
            if (dfs(nei)) return true;
        }
        visit.set(c, false);
        res.push(c);
    }

    for (let c of [...adjList.keys()]) {
        if (dfs(c)) return "";
    }
    return res.reverse().join('');
};

// console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
console.log(alienOrder(["Z", "Z"]));