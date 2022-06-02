// Kruskal's Algorithm | Union Find
// Time O(N^2*logN) 
// N^2 total edges and sorting will take N^2*logN^2 -> N^2logN
// Union Find will take O(N) | O(α(N)), where α(N) is Inverse Ackermann Function, which is nearly constant, even for large values of N.
// Space: O(N^2)
// N^2 for edges and N for tree and rank O(N^2 + N) -> O(N^2)


var minCostConnectPoints = function (points) {
    const edges = [];
    const N = points.length;

    for (let p1 = 0; p1 < N; p1++) {
        const [x1, y1] = points[p1];
        for (let p2 = p1 + 1; p2 < N; p2++) {
            const [x2, y2] = points[p2];
            const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            edges.push([p1, p2, cost]);
        }
    }

    edges.sort((e1, e2) => e1[2] - e2[2]);


    // union find
    const tree = new Array(N).fill(-1).map((_, idx) => idx);
    const rank = new Array(N).fill(1);

    function root(a) {
        while (tree[a] !== a) {
            tree[a] = tree[tree[a]];
            a = tree[a];
        }
        return a;
    }

    function union(a, b) {
        const [root_a, root_b] = [root(a), root(b)];

        if (rank[root_a] > rank[root_b]) {
            tree[root_b] = root_a;
            rank[root_a] += rank[root_b]
        } else {
            tree[root_a] = root_b;
            rank[root_b] += rank[root_a]
        }
    }

    function find(a, b) {
        return root(a) === root(b);
    }

    let minCost = 0;
    let edgesSelected = 0;
    for (let [p1, p2, cost] of edges) {
        if (edgesSelected === N - 1) break;
        if (find(p1, p2)) continue;
        minCost += cost; edgesSelected += 1;
        union(p1, p2);
    }
    return minCost;
};

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));