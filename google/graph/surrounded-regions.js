var solve = function (board) {
    const [R, C] = [board.length, board[0].length];

    function dfs(r, c) {
        if (r < 0 || c < 0 || r === R || c === C || board[r][c] !== 'O') return;

        board[r][c] = 'C'; // captured region
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let direction of directions) {
            const [dr, dc] = direction;
            dfs(r + dr, c + dc);
        }
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (board[r][c] === 'O' && ([0, R - 1].includes(r) || [0, C - 1].includes(c))) dfs(r, c);
        }
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (board[r][c] === 'O') board[r][c] = 'X';
            if (board[r][c] === 'C') board[r][c] = 'O';
        }
    }

    return board;
};