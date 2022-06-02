/* 
Segment tree is a very flexible data structure, 
because it is used to solve numerous range query problems 
like finding minimum, maximum, sum, greatest common divisor, 
least common denominator in array in logarithmic time.

Complexity:
Buid Seg Tree
Time: O(n) as there are approximately 2n nodes in the seg tree
Space: O(n) extra space to store seg tree O(2n)

Update Seg Tree
Time: O(logn) there are few tree nodes with range that includes 
ith array element, one on each level. There are logn levels
Space: O(1)

Range Sum Query
Time: O(logn)
Space: O(1)
*/

var NumArray = function (nums) {
    this.tree = []; this.nums = nums;
    const tree = this.tree;

    function build(pos, l, r) {
        if (l === r) tree[pos] = nums[l];
        else {
            const mid = Math.floor((l + r) / 2);
            const [lChild, rChild] = [2 * pos + 1, 2 * pos + 2]
            build(lChild, l, mid);
            build(rChild, mid + 1, r);
            tree[pos] = tree[lChild] + tree[rChild];
        }
    }
    build(0, 0, nums.length - 1);
};


NumArray.prototype.update = function (index, val) {
    const [tree, nums] = [this.tree, this.nums];
    const diff = val - nums[index];
    nums[index] = val;
    helper(0, 0, nums.length - 1);
    function helper(pos, l, r) {
        if (index >= l && index <= r) {
            tree[pos] += diff;
            if (l === r) return;
            const mid = Math.floor((l + r) / 2);
            helper(2 * pos + 1, l, mid);
            helper(2 * pos + 2, mid + 1, r);
        }
    }
};


NumArray.prototype.sumRange = function (left, right) {
    const [tree, nums] = [this.tree, this.nums];
    return helper(0, 0, nums.length - 1);
    function helper(pos, l, r) {
        if (l >= left && r <= right) return tree[pos]; // total overlap
        if (l > right || r < left) return 0; // no overlap
        const mid = Math.floor((l + r) / 2);
        return helper(2 * pos + 1, l, mid) + helper(2 * pos + 2, mid + 1, r);
    }
};