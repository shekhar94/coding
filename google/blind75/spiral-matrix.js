var spiralOrder = function (matrix) {
    let [m, n] = [matrix.length, matrix[0].length];
    let [l, r] = [0, n - 1];
    let [t, b] = [0, m - 1];
    const res = [];

    while (l < r && t < b) {
        for (let i = 0; i < r - l; i++) res.push(matrix[t][l + i]);
        for (let i = 0; i < b - t; i++) res.push(matrix[t + i][r]);
        for (let i = 0; i < r - l; i++) res.push(matrix[b][r - i]);
        for (let i = 0; i < b - t; i++) res.push(matrix[b - i][l]);

        l++; r--; t++; b--;
    }
    if (l === r && t <= b) {
        for (let i = t; i < b + 1; i++) res.push(matrix[i][l]);
    }
    if (t === b && l < r) {
        for (let i = l; i < r + 1; i++) res.push(matrix[t][i]);
    }
    return res;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));