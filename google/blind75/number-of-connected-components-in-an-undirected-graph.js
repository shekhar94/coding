// DFS Approach O(E+V)
function dfs(adjList, visit, node) {
    if (visit.has(node)) return;

    visit.add(node);
    const adj = adjList[node];
    for (let i = 0; i < adj.length; i++) {
        dfs(adjList, visit, adj[i]);
    }
}

var countComponents = function (n, edges) {
    const adjList = new Array(n).fill(0).map(() => new Array());
    const visit = new Set();
    let connComp = 0;

    for (let i = 0; i < edges.length; i++) {
        const [ai, bi] = edges[i];
        adjList[ai].push(bi);
        adjList[bi].push(ai);
    }

    for (let i = 0; i < n; i++) {
        if (visit.has(i)) continue;
        connComp++
        dfs(adjList, visit, i);
    }

    return connComp;
};
// DFS Approach ends here

// Union Find Approach
class UnionFind {
    constructor(tree, rank) {
        this.tree = tree;
        this.rank = rank;
    }


    root(a) {
        while (this.tree[a] !== a) {
            this.tree[a] = this.tree[this.tree[a]]; // Using path compression
            a = this.tree[a];
        }
        return a;
    }

    union(a, b) {
        const rootA = this.root(a);
        const rootB = this.root(b);

        if (rootA === rootB) return 0
        if (this.rank[rootA] < this.rank[rootB]) {
            this.tree[rootA] = rootB;
            this.rank[rootB] += this.rank[rootA];
        } else {
            this.tree[rootB] = rootA;
            this.rank[rootA] += this.rank[rootB];
        }
        return 1;
    }

    find(a, b) {
        return this.root(a) === this.root(b);
    }
}

var countComponents = function (n, edges) {
    const tree = new Array(n).fill(0).map((item, idx) => idx);
    const rank = new Array(n).fill(1);
    const uf = new UnionFind(tree, rank);
    let count = n;

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        if (uf.find(a, b)) continue;
        count -= uf.union(a, b);
    }

    return count;
}
// Union Find Approach ends here

console.log(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]));
console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]));