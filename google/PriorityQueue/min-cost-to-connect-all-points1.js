// // Use below links if you want to understand more about the PriorityQueue
// https://github.com/datastructures-js/priority-queue
// https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var minCostConnectPoints = function (points) {
    const N = points.length;
    const adjList = new Map();

    // build adjList [cost, index -> index of point in points]
    for (let i = 0; i < N; i++) {
        adjList.set(i, []);
        const [x1, y1] = points[i]
        for (let j = i + 1; j < N; j++) {
            const [x2, y2] = points[j];
            const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            adjList.get(i).push([cost, j]);
        }
    }

    const minH = new MinPriorityQueue({ compare: (a, b) => a[0] > b[0] });
    const visit = new Set();
    minH.enqueue([0, 0]);

    let res = 0;
    while (visit.size < N) {
        const [cost, i] = minH.dequeue();
        if (visit.has(i)) continue;

        res += cost;
        visit.add(i);
        for (let [nCost, nI] of adjList.get(i)) {
            if (!visit.has(nI)) {
                minH.enqueue([nCost, nI]);
            }
        }
    }
    return res;
};

function main() {
    let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
    // let points = [[3, 12], [-2, 5], [-4, 1]];

    console.log(minCostConnectPoints(points));
}

main();








// leet code solution
// Time O(N2.logN) Space O(N2)
let minCostConnectPoints = function (points) {
    let n = points.length;

    // Min-heap to store minimum weight edge at top.
    let heap = new MinHeap();

    // Track nodes which are included in MST.
    let inMST = Array(n).fill(false);

    heap.insert(0, 0);
    let mstCost = 0;
    let edgesUsed = 0;

    while (edgesUsed < n) {
        let [weight, currNode] = heap.getMin();
        heap.remove();

        // If node was already included in MST we will discard this edge.
        if (inMST[currNode]) {
            continue;
        }

        inMST[currNode] = true;
        mstCost += weight;
        edgesUsed++;

        for (let nextNode = 0; nextNode < n; ++nextNode) {
            // If next node is not in MST, then edge from curr node
            // to next node can be pushed in the priority queue.
            if (!inMST[nextNode]) {
                let nextWeight = Math.abs(points[currNode][0] - points[nextNode][0]) +
                    Math.abs(points[currNode][1] - points[nextNode][1]);

                heap.insert(nextWeight, nextNode);
            }
        }
    }

    return mstCost;
};

// Implementing min heap data-structure.
class MinHeap {
    constructor() {
        // Initialing the array heap and adding a dummy element at index 0.
        this.heap = [null];
    }

    getMin() {
        // Accessing the min element at index 1 in the heap array.
        return this.heap[1];
    }

    insert(weight, node) {
        // Inserting the new node at the end of the heap array.
        this.heap.push([weight, node]);

        // Finding the correct position for the new node.
        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            // Traversing up the parent node until the current node (current) is 
            // greater than the parent (current/2).
            while (current > 1 && this.heap[Math.floor(current / 2)][0] > this.heap[current][0]) {
                // Swapping the two nodes by using the ES6 destructuring syntax.
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]];
                current = Math.floor(current / 2);
            }
        }
    }

    remove() {
        // Smallest element is at the index 1 in the heap array.
        let smallest = this.heap[1];

        // When there are more than two elements in the array, 
        // we put the right most element at the first position and start 
        // comparing nodes with the child nodes/
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1][0] > this.heap[2][0]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
                (this.heap[current][0] > this.heap[leftChildIndex][0] ||
                    this.heap[current][0] > this.heap[rightChildIndex][0])) {

                if (this.heap[leftChildIndex][0] < this.heap[rightChildIndex][0]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        }

        // If there are only two elements in the array, 
        // we directly splice out the first element.
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }

        return smallest;
    }
};


// Time O(N2) space: O(N) Prims algo
let minCostConnectPoints = function (points) {
    let n = points.length;
    let mstCost = 0;
    let edgesUsed = 0;

    // Track nodes which are visited.
    let inMST = Array(n).fill(false);

    let minDist = Array(n).fill(Number.MAX_SAFE_INTEGER);
    minDist[0] = 0;

    while (edgesUsed < n) {
        let currMinEdge = Number.MAX_SAFE_INTEGER;
        let currNode = -1;

        // Pick least weight node which is not in MST.
        for (let node = 0; node < n; ++node) {
            if (!inMST[node] && currMinEdge > minDist[node]) {
                currMinEdge = minDist[node];
                currNode = node;
            }
        }

        mstCost += currMinEdge;
        edgesUsed++;
        inMST[currNode] = true;

        // Update adjacent nodes of current node.
        for (let nextNode = 0; nextNode < n; ++nextNode) {
            let weight = Math.abs(points[currNode][0] - points[nextNode][0]) +
                Math.abs(points[currNode][1] - points[nextNode][1]);

            if (!inMST[nextNode] && minDist[nextNode] > weight) {
                minDist[nextNode] = weight;
            }
        }
    }

    return mstCost;
};