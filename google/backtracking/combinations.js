// k*n^k  or k*(n!/(n-k)! k!)
var combine = function (n, k) {
    const res = [];
    function backtrack(arr, i) {
        if (arr.length === k) return res.push([...arr]);
        if (arr.length > k || i > n) return;

        arr.push(i);
        backtrack(arr, i + 1);
        arr.pop();
        backtrack(arr, i + 1);
    }
    backtrack([], 1);
    return res;
};

// Approach 2
var combine = function (n, k) {
    const res = [];
    function backtrack(arr, i) {
        if (arr.length === k) {
            res.push([...arr]);
            return;
        }

        for (let j = i; j < n + 1; j++) {
            arr.push(j);
            backtrack(arr, j + 1);
            arr.pop();
        }
    }
    backtrack([], 1);
    return res;
};

console.log(combine(4, 2));