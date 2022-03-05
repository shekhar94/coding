class UnionFind {
    constructor(tree, rank) {
        this.tree = tree;
        this.rank = rank;
    }

    // without path compression
    // root(a) {
    //     while (this.tree[a] !== a) {
    //         a = this.tree[a];
    //     }
    //     return a;
    // }

    // Using union find with rank together with path compression takes logN time 
    // for each Union Find operation where N is number of nodes in tree
    root(a) { // with path compression
        while (this.tree[a] !== a) {
            this.tree[a] = this.tree[this.tree[a]];
            a = this.tree[a];
        }
        return a;
    }

    union(a, b) {
        const rootA = this.root(a);
        const rootB = this.root(b);
        if (this.rank[rootA] <= this.rank[rootB]) {
            // make b as parent
            this.tree[rootA] = rootB;
            this.rank[rootB] += this.rank[rootA];
        } else {
            this.tree[rootB] = rootA;
            this.rank[rootA] += this.rank[rootB];
        }
    }

    find(a, b) {
        return this.root(a) === this.root(b);
    }
}

function findRedundantConnection(edges) {
    let tree = Array(1002);
    for (let i = 0; i < tree.length; i++) tree[i] = i;
    let rank = Array(1002).fill(1);

    const uf = new UnionFind(tree, rank);
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        if (uf.find(a, b)) return edges[i];
        else {
            uf.union(a, b);
        }
    }
}

function main() {
    // const edges = [[1, 2], [1, 3], [2, 3]];
    const edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]];
    console.log(findRedundantConnection(edges));
}
main();
