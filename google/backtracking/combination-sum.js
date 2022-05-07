// Approach 1
// https://medium.com/@vasanths294/permutation-combination-subset-time-complexity-eca924e00071
var combinationSum = function (candidates, target) {
    let res = [];
    function dfs(total, arr, currIdx) {
        if (total > target) return;
        if (total === target) return res.push([...arr]);

        for (let i = currIdx; i < candidates.length; i++) {
            arr.push(candidates[i]);
            dfs(total + candidates[i], arr, i);
            arr.pop();
        }
    }
    dfs(0, [], 0);
    return res;
};

// Approach 2
var combinationSum = function (candidates, target) {
    let res = [];
    function dfs(i, total, arr) {
        if (total === target) return res.push([...arr]);
        if (i >= candidates.length || total > target) return;

        arr.push(candidates[i]);
        dfs(i, total + candidates[i], arr);
        arr.pop();
        dfs(i + 1, total, arr);
    }
    dfs(0, 0, []);
    return res;
};
console.log(combinationSum([2, 3, 6, 7], 7));