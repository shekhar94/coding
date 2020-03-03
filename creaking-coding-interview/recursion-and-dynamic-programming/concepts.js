/* 
Three of the most common approaches to develop an algorithm are
bottom-up, top-down, and half-and-half.

Bottom-Up:
We start with knowing how to solve the problem for a simple case, like
a list with only one element. Then figure out how to solve the problem 
for two elements, then for three elements, and so on.

Top-Down:
How we can divide the problem for case N into sub-problems.
Be careful of overlap between the cases.

Half-and-Half:
Divide the data set in half.
Binary search works with "half-and-half" approach.
Merge sort is also a "half-and-half" approach. We sort each half of the array and 
then merge together the sorted halves.

All recursive algorithms can be implemented iteratively, although sometimes the code to 
do so is much more complex.Before diving into recursive code, ask yourself how hard it would
be to implement it iteratively, and discuss tradeoffs with your interviewer.


*/
// recursive
function fibonacci(i) {
    if (i === 0 || i === 1) return i;
    return fibonacci(i - 1) + fibonacci(i - 2);
}

// O(2^n) true runtime is closer to O(1.6^n)

// Dynamic Programming

// Top-Down (memoization)
function fibonacci(n) {
    return fibonacci(n, []);
}
function fibonacci(i, memo) {
    if (i === 0 || i === 1) return i;
    if (!memo[i]) {
        memo[i] = fibonacci(i - 1, memo) + fibonacci(i - 2, memo);
    }
    return memo[i];
}

// O(n)

// Bottom-Up(Dynamic programming)
function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;

    const memo = [];
    memo[0] = 0;
    memo[1] = 1;
    for (let i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n - 1] + memo[n - 2];
}