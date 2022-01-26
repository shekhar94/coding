function isBlueLackContinent(i, j) {
    return i === 0 || j === 0;
}

function isRedLackContinent(i, j, totalRows, totalCols) {
    return i === totalRows - 1 || j === totalCols - 1;
}


function bfsBlue(graph, i, j) {
    if (visited[i][j]) return false;

    const visited = get2DArr(totalRows, totalCols);
    const queue = [];
    queue.push({ i, j });
    visited[i][j] = true;


    while (queue.length) {
        const currentNode = queue.pop();
        const { i, j } = currentNode;
        if (j - 1 >= 0 && graph[i][j - 1] <= graph[i][j]) {
            queue.push({ i, j: j - 1 });
        }
        if (j + 1 < totalCols && graph[i][j + 1] <= graph[i][j]) {
            queue.push({ i, j: j + 1 });
        }
        if (i - 1 >= 0 && graph[i - 1][j] <= graph[i][j]) {
            queue.push({ i: i - 1, j });
        }
        if (i + 1 < totalRows && graph[i + 1][j] <= graph[i][j]) {
            queue.push({ i: i + 1, j });
        }
    }

    console.log(visited);

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
    const A = [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
    ]

    console.log(findCount(A));
}

main();