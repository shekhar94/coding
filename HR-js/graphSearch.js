'use strict'
class Node {
    constructor(id) {
        this.id = id;
        this.adjacent = [];
    }
}
class Graph { // directed graph
    constructor() {
        this.nodeLookup = new Map();
    }
    getNode(id) {
        return this.nodeLookup.get(id);
    }
    addEdge(source, destination) {
        var s = this.getNode(source);
        var d = this.getNode(destination);
        s.adjacent.push(d);
    }
    dfs() {

    }
}