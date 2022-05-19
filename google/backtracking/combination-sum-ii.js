// O(2^n) include/exclude space: O(n)
var combinationSum2 = function (candidates, target) {
    const len = candidates.length;
    candidates.sort((a, b) => a - b);
    const res = [];
    function backtrack(arr, currIdx, target) {
        if (target === 0) res.push([...arr]);

        if (target <= 0) return;

        let prev = -1;
        for (let i = currIdx; i < len; i++) {
            const candidate = candidates[i];
            if (prev === candidate) continue;

            arr.push(candidate);
            backtrack(arr, i + 1, target - candidate);
            arr.pop();
            prev = candidate;
        }
    }


    backtrack([], 0, target);
    return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));