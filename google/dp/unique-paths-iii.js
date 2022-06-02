/* 
Time O(3^n)
we have 4 directions but we have at most 3 directions to try except first step. 
The last dir is the direction where we came from, therefore we don't need to explore it

Space: O(N) function call stack
*/
var uniquePathsIII = function (grid) {
    const [R, C] = [grid.length, grid[0].length];
    let start, end, empty = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 0) empty++;
            else if (grid[r][c] === 1) start = [r, c];
            if (grid[r][c] === 2) end = [r, c];
        }
    }

    const [rs, cs] = start;
    const [re, ce] = end;
    function helper(r, c, visitCount) {
        if (r < 0 || c < 0 || r === R || c === C || grid[r][c] === 'v' || grid[r][c] === -1) return 0;
        // (visitCount - 1) as we are incrementing this for start position also which is not required while comparing
        if (r === re && c === ce && visitCount - 1 === empty) return 1;


        grid[r][c] = 'v';
        visitCount += 1;
        const res = (
            helper(r + 1, c, visitCount) +
            helper(r - 1, c, visitCount) +
            helper(r, c + 1, visitCount) +
            helper(r, c - 1, visitCount)
        );
        grid[r][c] = 0;
        return res;
    }

    return helper(rs, cs, 0);
};