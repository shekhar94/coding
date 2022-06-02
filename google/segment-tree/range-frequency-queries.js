function nextPowerOf2(num) {
    if (num === 0) return 1;
    if (num > 0 && (num & (num - 1)) == 0) return num;
    while (num & (num - 1) > 0) {
        num = num & (num - 1);
    }
    return num << 1;
}

function getFreq(freqL, freqR) {
    const set = [...new Set([...Object.keys(freqL), ...Object.keys(freqR)])];
    const freq = {};
    for (let key of set) {
        freq[key] = (freqR[key] || 0) + (freqL[key] || 0);
    }
    return freq;
}

var RangeFreqQuery = function (arr) {
    [this.low, this.high] = [0, arr.length - 1];
    const treeSize = nextPowerOf2(arr.length);
    // treeSize*2 - 1
    this.segTree = new Array(treeSize).fill({});
    const segTree = this.segTree;

    function build(low, high, pos) {
        if (low === high) {
            segTree[pos] = { [arr[low]]: 1 };
            return;
        }
        const mid = Math.floor((low + high) / 2);
        build(low, mid, 2 * pos + 1);
        build(mid + 1, high, 2 * pos + 2);
        segTree[pos] = getFreq(segTree[2 * pos + 1], segTree[2 * pos + 2]);
    }
    build(0, arr.length - 1, 0);
};

RangeFreqQuery.prototype.query = function (left, right, value) {
    const [qlow, qHigh, low, high, segTree] = [left, right, this.low, this.high, this.segTree];

    function freqQuery(low, high, pos) {
        if (low >= qlow && high <= qHigh) return segTree[pos] ? (segTree[pos][value] || 0) : 0;
        if (qlow > high || qHigh < low) return 0;

        const mid = Math.floor((low + high) / 2);
        return freqQuery(low, mid, 2 * pos + 1) + freqQuery(mid + 1, high, 2 * pos + 2);
    }
    return freqQuery(low, high, 0);
};

// console.log(nextPowerOf2(5));
const rf = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
console.log(rf.query(1, 2, 4));
console.log(rf.query(0, 11, 33));

