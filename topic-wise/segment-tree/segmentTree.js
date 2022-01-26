class SegmentTree {
    constructor() {
        this.tree = null;
    }

    create({ input_arr, low, high, pos }) {
        if (!this.tree) {
            this.tree = new Array(input_arr.length).fill(Number.MAX_SAFE_INTEGER);
        }
        if (low === high) {
            this.tree[pos] = input_arr[low];
            return;
        }
        const mid = Math.floor((low + high) / 2);
        this.create({ input_arr, low, high: mid, pos: 2 * pos + 1 })
        this.create({ input_arr, low: mid + 1, high, pos: 2 * pos + 2 })
        this.tree[pos] = Math.min(this.tree[2 * pos + 1], this.tree[2 * pos + 2]);
    }

    query({ queryLow, queryHigh, low, high, pos }) {
        if (queryLow <= low && queryHigh >= high) {
            // total overlap
            return this.tree[pos];
        }
        if (queryLow > high || queryHigh < low) {
            // no overlap
            return Number.MAX_SAFE_INTEGER;
        }
        const mid = Math.floor((low + high) / 2);

        return Math.min(this.query({ queryLow, queryHigh, low, high: mid, pos: 2 * pos + 1 }), this.query({ queryLow, queryHigh, low: mid + 1, high, pos: 2 * pos + 2 }))
    }
}

const segTree = new SegmentTree();
segTree.create({ input_arr: [-1, 0, 3, 6], low: 0, high: 3, pos: 0 });
console.log(segTree.query({ queryLow: 3, queryHigh: 3, low: 0, high: 3, pos: 0 }));


