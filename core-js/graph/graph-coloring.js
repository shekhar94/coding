// https://www.hackerrank.com/contests/apc/challenges/colour-the-graph
// Partially solved
function main(input) {
    const input_arr = input.split('\n');
    const N = Number(input_arr[0]);
    const edgeMap = new Map();
    for (let i = 1; i < N; i++) {
        const edge = input_arr[i].split(' ').map(Number);
        if (!edgeMap.has(edge[0])) {
            edgeMap.set(edge[0], []);
        }
        if (!edgeMap.has(edge[1])) {
            edgeMap.set(edge[1], []);
        }
        edgeMap.get(edge[0]).push(edge[1]);
        edgeMap.get(edge[1]).push(edge[0]);
    }
    const colors_count = colourTheGraph(edgeMap, N);
    console.log(colors_count);
}
function getAvailableColor(current_node, edgeMap, node_color_map) {
    const used_colors_map = new Map();
    const linked_nodes = edgeMap.get(current_node);
    linked_nodes.forEach(node => {
        if (node_color_map.has(node)) {
            used_colors_map.set(node_color_map.get(node));
        }
    });
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
    for (let i = 1; i <= node_count; i++) {
        const color = getAvailableColor(i, edgeMap, node_color_map, colors_count);
        node_color_map.set(i, color);
        if (color > colors_count) colors_count = color;
    }
    return colors_count;
}

main("4\n1 2\n1 3\n2 4");