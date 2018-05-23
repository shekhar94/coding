/* 
    Author: shekhar suman 22/05/2018
*/
// https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem

// main("4\n4\n1 1 0 0\n0 1 1 0\n0 0 1 0\n1 0 0 0");
main("5\n6\n1 1 1 1 0 0\n0 0 0 0 1 1\n1 0 1 0 0 1\n0 0 0 1 1 0\n1 1 0 0 0 0");
// main("1\n1\n1");

function main(input) {
    let ip_arr = input.split("\n");
    let rowLen = Number(ip_arr[0]);
    let colLen = Number(ip_arr[1]);
    let matrix = [];
    for (let i = 2; i < ip_arr.length; i++) {
        matrix[i - 2] = ip_arr[i].split(" ").map(Number);
    }
    findLargestRegion(matrix, rowLen, colLen);
}

function findLargestRegion(matrix, rowLen, colLen) {
    let visited = [];
    let result = 0;
    let count = 0;
    for (let i = 0; i < rowLen; i++) {
        if (!visited[i]) {
            visited[i] = [];
        }
        for (let j = 0; j < colLen; j++) {
            if (matrix[i][j] && !visited[i][j]) {
                // console.log(traverseFrom(i, j, visited, rowLen, colLen, matrix));
                count = traverseFrom(i, j, visited, rowLen, colLen, matrix);
                if (result < count) {
                    result = count;
                }
                // console.log("\n");
            }
        }
    }
    console.log(result);
}


function traverseFrom(row, col, visited, rowLen, colLen, matrix) {
    var count = 0;
    if (row < 0 || col < 0 || row >= rowLen || col >= colLen || !matrix[row][col] || (visited[row] && visited[row][col])) {
        // if 0 at this location no need to go further
        return 0;
    }
    // if(matrix[row][col])
    // console.log("(", row, ",", col, ")");
    if (!visited[row]) {
        visited[row] = [];
    }
    visited[row][col] = true;
    count++;
    count += (
        traverseFrom(row, col - 1, visited, rowLen, colLen, matrix) +
        traverseFrom(row - 1, col, visited, rowLen, colLen, matrix) +
        traverseFrom(row - 1, col - 1, visited, rowLen, colLen, matrix) +
        traverseFrom(row - 1, col + 1, visited, rowLen, colLen, matrix) +
        traverseFrom(row, col + 1, visited, rowLen, colLen, matrix) +
        traverseFrom(row + 1, col, visited, rowLen, colLen, matrix) +
        traverseFrom(row + 1, col + 1, visited, rowLen, colLen, matrix) +
        traverseFrom(row + 1, col - 1, visited, rowLen, colLen, matrix)
    );
    return count;
}