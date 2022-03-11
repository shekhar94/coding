// Time O(V+E) Space O(V)
let map;
function recursive(node) {
    if (!node) return null;
    // if node is already initialized, return from map
    if (map.has(node.val)) return map.get(node.val);

    const start = new Node(node.val);
    map.set(node.val, start);

    const neighbors = node.neighbors;
    if (!neighbors || neighbors.length === 0) return start;
    const newNeigh = [];
    for (let i = 0; i < neighbors.length; i++) {
        const newN = recursive(neighbors[i]);
        newNeigh.push(newN);
    }
    start.neighbors = newNeigh;
    return start;
}

var cloneGraph = function (node) {
    map = new Map();
    return recursive(node);
};
