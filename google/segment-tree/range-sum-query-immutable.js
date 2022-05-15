
var NumArray = function (nums) {
    function nextPowerOf2(n) {
        if (n === 0) return 1;
        if (n > 0 && (n & (n - 1)) === 0) return n;
        while (n & (n - 1) > 0) {
            n = n & (n - 1);
        }
        return n << 1;
    }
    const treeSize = nextPowerOf2(nums.length);
    const segTree = new Array(treeSize);
    [this.high, this.segTree] = [nums.length - 1, segTree];

    function build(pos, l, r) {
        if (l === r) {
            segTree[pos] = nums[l];
            return;
        }
        const mid = Math.floor((l + r) / 2);
        build(2 * pos + 1, l, mid);
        build(2 * pos + 2, mid + 1, r);
        segTree[pos] = segTree[2 * pos + 1] + segTree[2 * pos + 2];
    }
    build(0, 0, nums.length - 1);
};

NumArray.prototype.sumRange = function (left, right) {
    const [segTree, low, high, qL, qH] = [this.segTree, 0, this.high, left, right];

    function query(pos, low, high) {
        if (qH < low || qL > high) return 0;
        if (low >= qL && high <= qH) return segTree[pos];
        const mid = Math.floor((low + high) / 2);
        return (query(2 * pos + 1, low, mid) + query(2 * pos + 2, mid + 1, high));
    }

    return query(0, low, high);
};