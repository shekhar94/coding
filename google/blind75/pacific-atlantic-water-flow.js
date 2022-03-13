let hArr, m, n;
function dfs(row, col, visited, prevHeight) {
    if (row < 0 || col < 0 || row >= m || col >= n) return;
    if (visited[row][col]) return;
    if (hArr[row][col] < prevHeight) return;

    visited[row][col] = true;

    dfs(row + 1, col, visited, hArr[row][col]);
    dfs(row - 1, col, visited, hArr[row][col]);
    dfs(row, col + 1, visited, hArr[row][col]);
    dfs(row, col - 1, visited, hArr[row][col]);

}


var pacificAtlantic = function (heights) {
    hArr = heights;
    m = heights.length, n = heights[0].length;
    const pac = new Array(m).fill(false).map(() => new Array(n).fill(false));
    const atl = new Array(m).fill(false).map(() => new Array(n).fill(false));
    for (let col = 0; col < n; col++) {
        dfs(0, col, pac, heights[0][col]);
        dfs(m - 1, col, atl, heights[m - 1][col]);
    }

    for (let row = 0; row < m; row++) {
        dfs(row, 0, pac, heights[row][0]);
        dfs(row, n - 1, atl, heights[row][n - 1]);
    }

    const res = [];
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (pac[row][col] && atl[row][col]) res.push([row, col]);
        }
    }
    return res;
};

console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]));