class Node {
    constructor(rank, data, parent) {
        this.rank = rank;
        this.data = data;
        this.parent = parent;
    }
}

class DisjointSet {
    constructor() {
        this.map = new Map();
    }
    union(data1, data2) {
        const node1 = this.map.get(data1);
        const node2 = this.map.get(data2);
        const parent1 = this.findSet(node1);
        const parent2 = this.findSet(node2);

        //if they are part of same set do nothing
        if (parent1.data === parent2.data) {
            return false;
        }

        //else whoever's rank is higher becomes parent of other
        if (parent1.rank >= parent2.rank) {
            parent1.rank = (parent1.rank === parent2.rank) ? parent1.rank + 1 : parent1.rank;
            parent2.parent = parent1;
        } else {
            parent1.parent = parent2;
        }
        return true;
    }
    /**
     * Find the representative recursively and does path
     * compression as well.
     */
    findSet(node) {
        const parent = node.parent;
        if (parent === null) {
            return node;
        }
        node.parent = this.findSet(node.parent);
        return node.parent;
    }
    makeSet(data) {
        const node = new Node(0, data, null);
        this.map.set(data, node);
    }
}

class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

function kruskal(gNodes, gFrom, gTo, gWeight) {
    /* 
    sort edges based on weight
    create disjoint set 
    */
    const edgeArr = [];
    for (let i = 0; i < gFrom.length; i++) {
        const edge = new Edge(gFrom[i], gTo[i], gWeight[i]);
        edgeArr.push(edge);
    }
    const sortedEdgeArr = edgeArr.sort((edge1, edge2) => {
        return edge1.weight - edge2.weight;
    });
    const dSet = new DisjointSet();
    for (let i = 1; i <= gNodes; i++) {
        dSet.makeSet(i);
    }
    let edgeCount = 0;
    let i = 0;
    let total = 0;
    while (edgeCount < gNodes - 1 && i < sortedEdgeArr.length) {
        const edge = sortedEdgeArr[i];
        if (dSet.union(edge.from, edge.to)) {
            total += edge.weight;
        }
        i++;
    }
    return total;
}

function main() {
    const gNodes = 4;
    const gFrom = [1, 1, 4, 2, 3, 3];
    const gTo = [2, 3, 1, 4, 2, 4];
    const gWeight = [5, 3, 6, 7, 4, 5];

    const total = kruskal(gNodes, gFrom, gTo, gWeight);
    console.log(total);
}

main();


