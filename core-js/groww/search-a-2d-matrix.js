// https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix, target) {
    // start search at top right corner
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            // return { row, col };
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    // return -1;
    return false;
}

function main() {
    const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ];
    const target = 11;
    const res = searchMatrix(matrix, target);
    console.log(res);
}

main();