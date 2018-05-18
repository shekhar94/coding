class Node {
    constructor(id) {
        this.id = id;
        this.adjacent = [];
    }
}
class Graph { // directed graph
    constructor() {
        this.nodeLookup = new Map();
        this.nodeLookup.set(1, new Node(1));
        this.nodeLookup.set(2, new Node(2));
        this.nodeLookup.set(3, new Node(3));
        this.nodeLookup.set(4, new Node(4));
        this.nodeLookup.set(5, new Node(5));
        this.nodeLookup.set(6, new Node(6));
        this.addEdge(1, 2);
        this.addEdge(1, 3);
        this.addEdge(2, 4);
        this.addEdge(2, 5);
        this.addEdge(3, 4);
        this.addEdge(3, 5);
        this.addEdge(5, 6);
    }
    getNode(id) {
        return this.nodeLookup.get(id);
    }
    addEdge(source, destination) {
        let s = this.getNode(source);
        let d = this.getNode(destination);
        s.adjacent.push(d);
    }
    dfsHelper(source, destination) {
        let s = this.getNode(source);
        let d = this.getNode(destination);
        let visited = new Map();
        console.log(this.dfs(s, d, visited));
    }
    dfs(source, destination, visited) {
        if (visited.has(source.id)) {
            return false;
        }
        if (source === destination) {
            return true;
        }
        visited.set(source.id, true);
        console.log(visited);
        for (let i = 0; i < source.adjacent.length; i++) {
            if (this.dfs(source.adjacent[i], destination, visited)) {
                return true;
            }
        }
        return false;
    }
    bfsHelper(source, destination) {
        var s = this.getNode(source);
        var d = this.getNode(destination);
        console.log(this.bfs(s, d));
    }
    bfs(source, destination) {
        let visited = new Map();
        let nextToVisit = [];
        nextToVisit.push(source);
        while (nextToVisit.length > 0) {
            let node = nextToVisit.shift();
            if (node === destination) {
                return true;
            }
            if (visited.has(node.id)) {
                continue;
            }
            console.log(visited);
            visited.set(node.id, true);

            for (let i = 0; i < node.adjacent.length; i++) {
                nextToVisit.push(node.adjacent[i]);
            }
        }
        return false;
    }
}

var g = new Graph();
g.dfsHelper(1, 6);
// g.bfsHelper(1, 6);