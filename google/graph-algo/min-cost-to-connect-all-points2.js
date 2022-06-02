let minCostConnectPoints = function (points) {
    const N = points.length;
    let mstCost = 0;

    const visit = new Set();
    const minDis = new Array(N).fill(Number.MAX_SAFE_INTEGER);
    minDis[0] = 0;

    while (visit.size < N) {
        let currMinEdge = Number.MAX_SAFE_INTEGER;
        let currNode = -1;

        for (let node = 0; node < N; node++) {
            if (!visit.has(node) && currMinEdge > minDis[node]) {
                currMinEdge = minDis[node];
                currNode = node;
            }
        }

        mstCost += currMinEdge;
        visit.add(currNode)
        for (let nextNode = 0; nextNode < N; nextNode++) {
            const [x1, y1] = points[currNode];
            const [x2, y2] = points[nextNode];
            const wt = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            if (!visit.has(nextNode) && minDis[nextNode] > wt) {
                minDis[nextNode] = wt;
            }
        }
    }
    return mstCost;
}

function main() {
    let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
    // let points = [[3, 12], [-2, 5], [-4, 1]];

    console.log(minCostConnectPoints(points));
}

main();