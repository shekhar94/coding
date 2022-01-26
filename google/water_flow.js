function isBlueLackContinent(i, j) {
    return i === 0 || j === 0;
}

function isRedLackContinent(i, j, totalRows, totalCols) {
    return i === totalRows - 1 || j === totalCols - 1;
}


function dfsBlue(arr, i, j, totalRows, totalCols, visited) {
    if (i >= totalRows || j >= totalCols || i < 0 || j < 0 || visited[i][j]) return false;
    visited[i][j] = true;
    if (isBlueLackContinent(i, j, totalRows, totalCols)) {
        return true;
    }

    let left = false, right = false, up = false, down = false;
    if (j - 1 >= 0 && arr[i][j - 1] <= arr[i][j]) {
        left = dfsBlue(arr, i, j - 1, totalRows, totalCols, visited); // left
    }
    if (j + 1 < totalCols && arr[i][j + 1] <= arr[i][j]) {
        right = dfsBlue(arr, i, j + 1, totalRows, totalCols, visited); // right
    }
    if (i - 1 >= 0 && arr[i - 1][j] <= arr[i][j]) {
        up = dfsBlue(arr, i - 1, j, totalRows, totalCols, visited); // up
    }
    if (i + 1 < totalRows && arr[i + 1][j] <= arr[i][j]) {
        down = dfsBlue(arr, i + 1, j, totalRows, totalCols, visited); // down
    }
    return left || right || up || down;
}

function dfsRed(arr, i, j, totalRows, totalCols, visited) {
    if (i >= totalRows || j >= totalCols || i < 0 || j < 0 || visited[i][j]) {
        return false;
    }
    visited[i][j] = true;
    if (isRedLackContinent(i, j, totalRows, totalCols)) {
        return true;
    }

    let left = false, right = false, up = false, down = false;
    if (j - 1 >= 0 && arr[i][j - 1] <= arr[i][j]) {
        left = dfsRed(arr, i, j - 1, totalRows, totalCols, visited); // left
    }
    if (j + 1 < totalCols && arr[i][j + 1] <= arr[i][j]) {
        right = dfsRed(arr, i, j + 1, totalRows, totalCols, visited); // right
    }
    if (i - 1 >= 0 && arr[i - 1][j] <= arr[i][j]) {
        up = dfsRed(arr, i - 1, j, totalRows, totalCols, visited); // up
    }
    if (i + 1 < totalRows && arr[i + 1][j] <= arr[i][j]) {
        down = dfsRed(arr, i + 1, j, totalRows, totalCols, visited); // down
    }
    return left || right || up || down;
}

function get2DArr(rows, cols) {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(false);
        }
        arr.push(row);
    }
    return arr;
}

function findCount(arr) {
    const totalRows = arr.length;
    const totalCols = arr[0].length;
    let counter = 0;

    for (let i = 0; i < totalRows; i++) {
        for (let j = 0; j < totalCols; j++) {
            const visBlue = get2DArr(totalRows, totalCols);
            const visRed = get2DArr(totalRows, totalCols);
            const isBlueLack = dfsBlue(arr, i, j, totalRows, totalCols, visBlue);
            const isRedLack = dfsRed(arr, i, j, totalRows, totalCols, visRed);
            if (isBlueLack && isRedLack) {
                // console.log(i, j);
                counter++;
            }
        }
    }
    return counter;
}

function main() {
    // A = [
    //     [1, 2, 2, 3, 5],
    //     [3, 2, 3, 4, 4],
    //     [2, 4, 5, 3, 1],
    //     [6, 7, 1, 4, 5],
    //     [5, 1, 1, 2, 4],
    // ]

    console.log(findCount(A));
}

main();