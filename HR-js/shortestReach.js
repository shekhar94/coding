/* 
    https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem
    Author: shekhar
*/


class Node {
    constructor(id, adjacent) {
        this.id = id;
        this.adjacent = adjacent;
    }
}
class Graph {
    constructor() {
        this.node_lookup = new Map();
    }
    getNode(id) {
        return this.node_lookup.get(id);
    }
    addNode(id, adjacent) {
        this.node_lookup.set(id, new Node(id, adjacent));
    }
    addEdge(node_1_id, node_2_id) {
        let node_1 = this.getNode(node_1_id);
        let node_2 = this.getNode(node_2_id);
        node_1.adjacent.push(node_2);
        node_2.adjacent.push(node_1);
    }

    BFS(source) {
        let queue = [];
        let visited = new Map();
        let i = 0;
        let distance = new Map();
        let level = 0;
        let no_of_node_this_level = 1;
        queue.push(source);
        while (queue.length > 0) {
            let node = queue.shift();
            no_of_node_this_level--;
            if (visited.has(node.id))
                continue;
            visited.set(node.id, true);
            // console.log(node.id, "distance->", level);
            distance.set(node.id, level);
            i++;
            for (let i = 0; i < node.adjacent.length; i++) {
                if (!visited.has(node.adjacent[i].id))
                    queue.push(node.adjacent[i]);
            }
            if (no_of_node_this_level === 0) {
                no_of_node_this_level = queue.length;
                level++;
            }
        }
        return distance;
    }

}

function findShortestPath(graph, source_id, no_of_nodes) {
    let source = graph.getNode(source_id);
    let distance = graph.BFS(graph.getNode(source_id));
    let result_arr = [];
    for (let i = 0; i < no_of_nodes; i++) {
        if (distance.has(i) && i !== source_id) {
            result_arr.push(distance.get(i) * 6);
        } else if (i !== source_id) {
            result_arr.push(-1);
        }
    }
    console.log(result_arr.join(" "));
}

function main(input) {
    let ip_arr = input.split("\n");
    let no_of_query = Number(ip_arr[0]);
    let pointer = 1;
    for (let i = 0; i < no_of_query; i++) {
        let node_edge_arr = ip_arr[pointer].split(" ").map(Number);
        pointer++;
        let no_of_nodes = node_edge_arr[0];
        let no_of_edges = node_edge_arr[1];
        let graph = new Graph();
        for (let j = 0; j < no_of_nodes; j++) { // add all nodes in graph
            graph.addNode(j, []);
        }
        for (let j = 0; j < no_of_edges; j++) { // add all edges
            let node_id_arr = ip_arr[pointer].split(" ").map(Number);
            let node_1_id = node_id_arr[0] - 1;
            let node_2_id = node_id_arr[1] - 1;
            graph.addEdge(node_1_id, node_2_id);
            pointer++;
        }
        let source_id = Number(ip_arr[pointer]) - 1;
        pointer++;
        findShortestPath(graph, source_id, no_of_nodes);
    }
    console.log("\n");
}

main("2\n4 2\n1 2\n1 3\n1\n3 1\n2 3\n2");