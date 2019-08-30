// https://leetcode.com/problems/is-graph-bipartite/submissions/

// A bipartite graph is possible if the graph coloring is possible
// using two colors such that vertices in a set are colored 
// with the same color. Note that it is possible to color 
// a cycle graph with even cycle using two colors. 
// For example, see the following graph.

function getAvailableColor(current_node, edgeMap, node_color_map) {
    const used_colors_map = new Map();
    if (edgeMap.has(current_node)) {
        const linked_nodes = edgeMap.get(current_node);
        linked_nodes.forEach(node => {
            if (node_color_map.has(node)) {
                used_colors_map.set(node_color_map.get(node));
            }
        });
    }
    let color = 1;
    while (true) {
        if (used_colors_map.has(color)) {
            color++;
        } else {
            return color;
        }
    }
}
function colourTheGraph(edgeMap, node_count) {
    let colors_count = 1;
    const node_color_map = new Map();
    let queue = [];
    queue.push(0);
    while (queue.length) {
        const current_node = queue.shift();
        if (!node_color_map.has(current_node)) {
            Array.prototype.push.apply(queue, edgeMap.get(current_node));
            const color = getAvailableColor(current_node, edgeMap, node_color_map);
            node_color_map.set(current_node, color);
            if (color > colors_count) colors_count = color;
        }
        if (queue.length === 0 && node_color_map.size < node_count) {
            // For disconnected nodes 
            for (let i = 0; i < node_count; i++) {
                if (!node_color_map.has(i)) {
                    queue.push(i);
                }
            }
        }
    }
    return colors_count;
}
function isBipartite(graph) {
    const edgeMap = new Map();
    for (let i = 0; i < graph.length; i++) {
        edgeMap.set(i, graph[i]);
    }
    return colourTheGraph(edgeMap, graph.length) <= 2 ? true : false;
}

function main() {
    // const graph = [[], [3], [], [1], []];
    // const graph = [[1], [0, 3], [3], [1, 2]];
    // const graph = [[1, 3], [0, 2], [1, 3], [0, 2]];
    // const graph = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
    const graph = [[]];
    console.log(isBipartite(graph));
}

main();