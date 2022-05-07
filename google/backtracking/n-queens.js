var solveNQueens = function (n) {
    const board = new Array(n).fill('.').map(() => new Array(n).fill('.'));
    const [cols, posDia, negDia] = [new Set(), new Set(), new Set()];
    const res = [];

    function backtrack(r) {
        if (r === n) {
            const copy = board.map(row => row.join(''));
            res.push(copy);
            return;
        }
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || posDia.has(r + c) || negDia.has(r - c)) continue;
            cols.add(c); posDia.add(r + c); negDia.add(r - c);
            board[r][c] = 'Q';
            backtrack(r + 1);
            cols.delete(c); posDia.delete(r + c); negDia.delete(r - c);
            board[r][c] = '.';
        }
    }

    backtrack(0);
    return res;
};
console.log(solveNQueens(4));