// n*2^n space: O(n)
var subsets = function (nums) {
    const res = [];
    let subset = [];

    function dfs(i) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        // left part of the decision tree
        subset.push(nums[i]);
        dfs(i + 1);

        // right part of the decision tree
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return res;
};

console.log(subsets([1, 2, 3]));

