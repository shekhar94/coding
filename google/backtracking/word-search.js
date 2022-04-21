// O(R*C*4^n) n = word length dfs 4^n

var exist = function (board, word) {
    const [R, C] = [board.length, board[0].length];
    const visit = new Array(R).fill(false).map(() => new Array(C).fill(false));
    function dfs(i, j, k) {
        if (k === word.length) return true;
        if (i < 0 || j < 0 || i === R || j === C || board[i][j] !== word[k] || visit[i][j]) return false;

        visit[i][j] = true;
        if (
            dfs(i + 1, j, k + 1) ||
            dfs(i - 1, j, k + 1) ||
            dfs(i, j + 1, k + 1) ||
            dfs(i, j - 1, k + 1)
        ) return true;

        return visit[i][j] = false;
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
        }
    }

    return false;
};


console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))