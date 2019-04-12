// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function main(input) {
    let matrix = input.split('\n').map(row => row.split(' ').map(Number));
    let maxSum = -Infinity;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let tempSum = getSum(i, j, matrix);
            if (tempSum > maxSum) maxSum = tempSum;
        }
    }
    console.log(maxSum);
}

function getSum(i, j, matrix) {
    return (
        matrix[i][j] +
        matrix[i][j + 1] +
        matrix[i][j + 2] +
        matrix[i + 1][j + 1] +
        matrix[i + 2][j] +
        matrix[i + 2][j + 1] +
        matrix[i + 2][j + 2]
    );
}
main("1 1 1 0 0 0\n0 1 0 0 0 0\n1 1 1 0 0 0\n0 0 2 4 4 0\n0 0 0 2 0 0\n0 0 1 2 4 0");