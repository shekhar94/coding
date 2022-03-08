let m, n, dp;
let max;
// Recursive Approach: TLE
function recursive(matrix, i, j) {
    if (i >= m || j >= n) return 0;

    // we have to solve 3 subproblem right to the current, down to the current, diagonally next to the current element
    // If all of them are non zero we need to use min of them to get a square as square will grow equally in all 3 directions
    const right = recursive(matrix, i, j + 1);
    const down = recursive(matrix, i + 1, j);
    const dia = recursive(matrix, i + 1, j + 1);
    const res = matrix[i][j] === "0" ? 0 : 1 + Math.min(right, down, dia); // In case the value in matrix 0 we can not make any square
    max = Math.max(res, max); // update the max value found
    return res;
}

// Memoized Solution for above recursive approach
function memoized(matrix, i, j) {
    if (i >= m || j >= n) return 0;
    if (dp[i][j] !== -1) return dp[i][j];

    dp[i][j + 1] = memoized(matrix, i, j + 1);
    dp[i + 1][j] = memoized(matrix, i + 1, j);
    dp[i + 1][j + 1] = memoized(matrix, i + 1, j + 1);
    dp[i][j] = matrix[i][j] === "0" ? 0 : 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);

    max = Math.max(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j], dp[i][j], max); // update the max found
    return dp[i][j];
}

function maximalSquare(matrix) {
    m = matrix.length; n = matrix[0].length;
    max = 0;
    dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1));
    recursive(matrix, 0, 0)
    // memoized(matrix, 0, 0);
    // console.log(dp);
    return max ** 2;

}
// Solution Ends here
function main() {
    const matrix = [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"]];
    console.log(maximalSquare(matrix));
}

main();