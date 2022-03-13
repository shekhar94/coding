// Performing DFS on a directed acyclic graph and sorting the vertices
// in descending order of finish times gives a topological ordering of vertices.

function dfs(adjList, visit, res, char) {
    if (visit.has(char)) return visit.get(char);

    visit.set(char, true);
    const adj = adjList.get(char);
    const adjArr = [...adj];
    for (let i = 0; i < adj.size; i++) {
        if (dfs(adjList, visit, res, adjArr[i])) return true;
    }
    visit.set(char, false);
    res.push(char);
}

var alienOrder = function (words) {
    const adjList = new Map();
    // Init adj list for each char
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            if (!adjList.has(word[i])) adjList.set(word[i], new Set());
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const [w1, w2] = [words[i], words[i + 1]];
        const minLen = Math.min(w1.length, w2.length);

        // Edge case given in the problem
        if (w1.length > w2.length && w1.substring(0, minLen) === w2.substring(0, minLen)) {
            return "";
        }
        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                adjList.get(w1[j]).add(w2[j]); // First mismatch found add to set and break the loop no need to check further
                break;
            }
        }
    }

    const visit = new Map();
    const res = [];

    for (let char of [...adjList.keys()]) {
        if (dfs(adjList, visit, res, char)) return ""; // No res can be found
    }
    res.reverse();
    return res.join('');
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));