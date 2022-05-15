var findRedundantConnection = function (edges) {
    const tree = new Array(edges.length + 1).fill(0).map((item, i) => i);
    const rank = new Array(edges.length + 1).fill(0);

    function root(a) {
        while (tree[a] !== a) {
            tree[a] = tree[tree[a]];
            a = tree[a];
        }
        return a;
    }
    function union(a, b) {
        const rootA = root(a);
        const rootB = root(b);
        if (rank[rootA] >= rank[rootB]) {
            tree[rootB] = rootA;
            rank[rootA] += rank[rootB];
        } else {
            tree[rootA] = rootB;
            rank[rootB] += rank[rootA];
        }
    }
    function find(a, b) {
        return root(a) === root(b);
    }
    for (let [a, b] of edges) {
        if (find(a, b)) return [a, b];
        union(a, b);
    }
};