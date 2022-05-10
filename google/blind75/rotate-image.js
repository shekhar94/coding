var rotate = function (matrix) {
    const n = matrix.length;
    let [l, r] = [0, n - 1];

    while (l < r) {
        const [t, b] = [l, r];
        for (let i = 0; i < r - l; i++) {
            let topLeft = matrix[t][l + i];
            matrix[t][l + i] = matrix[b - i][l];
            matrix[b - i][l] = matrix[b][r - i];
            matrix[b][r - i] = matrix[t + i][r];
            matrix[t + i][r] = topLeft;
        }
        l++; r--;
    }
};