function main() {
    let n = 3;
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let str = 'TVHHHVT';
    let str_arr = str.split('');
    for (let i = 0; i < str_arr.length; i++) {
        switch (str_arr[i]) {
            case 'T':
                matrix = transpose(n, matrix);
                break;
            case 'V':
                matrix = verticalFlip(n, matrix);
                break;
            case 'H':
                matrix = horizontalFlip(n, matrix);
                break;
        }
    }
    printResult(n, matrix);
}
// output
// 7 8 9
// 4 5 6
// 1 2 3
// T - transpose
// H - horizontal flip
// V - vertical flip
function printResult(n, matrix) {
    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(' '));
    }
}

function getCopyArray(arr) {
    return arr.map(function(arr) {
        return arr.slice();
    });
}

function transpose(n, matrix) {
    let tempMatrix = getCopyArray(matrix);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
            tempMatrix[i][j] = matrix[j][i];
    }
    return tempMatrix;
}

function horizontalFlip(n, matrix) {
    let tempMatrix = getCopyArray(matrix);
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n / 2; col++) {
            swap(tempMatrix, row, col, row, n - 1 - col);
        }
    }
    return tempMatrix;
}

function swap(matrix, i1, j1, i2, j2) {
    let temp = matrix[i1][j1];
    matrix[i1][j1] = matrix[i2][j2];
    matrix[i2][j2] = temp;
}

function verticalFlip(n, matrix) {
    let tempMatrix = getCopyArray(matrix);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            swap(tempMatrix, i, j, i, n - 1 - j)
        }
    }
    return tempMatrix;
}
main();