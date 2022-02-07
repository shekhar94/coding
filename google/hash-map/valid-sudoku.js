// https://leetcode.com/problems/valid-sudoku/

function validateRow(board) {
    for (let i = 0; i < 9; i++) {
        let map = Array(10).fill(0);
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (map[+board[i][j]]) return false;
                else map[+board[i][j]] = 1;
            }
        }
    }
    return true;
}

function validateCols(board) {
    for (let j = 0; j < 9; j++) {
        let map = Array(10).fill(0);
        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== '.') {
                if (map[+board[i][j]]) return false;
                else map[+board[i][j]] = 1;
            }
        }
    }
    return true;
}

function isValidSubBox(subBox, board) {
    const { is, ie, js, je } = subBox;
    const map = Array(10).fill(0);
    for (let i = is; i <= ie; i++) {
        for (let j = js; j <= je; j++) {
            if (board[i][j] !== '.') {
                if (map[+board[i][j]]) return false;
                else map[+board[i][j]] = 1;
            }
        }
    }
    return true;
}

function validateSubBoxes(board) {
    const subBoxs = [
        { is: 0, ie: 2, js: 0, je: 2 },
        { is: 0, ie: 2, js: 3, je: 5 },
        { is: 0, ie: 2, js: 6, je: 8 },
        { is: 3, ie: 5, js: 0, je: 2 },
        { is: 3, ie: 5, js: 3, je: 5 },
        { is: 3, ie: 5, js: 6, je: 8 },
        { is: 6, ie: 8, js: 0, je: 2 },
        { is: 6, ie: 8, js: 3, je: 5 },
        { is: 6, ie: 8, js: 6, je: 8 },
    ];
    for (let subBx = 0; subBx < subBoxs.length; subBx++) {
        if (!isValidSubBox(subBoxs[subBx], board)) return false;
    }
    return true;
}

function isValidSudoku(board) {
    console.log('validateSubBoxes(board): ', validateSubBoxes(board));
    console.log('validateCols(board): ', validateCols(board));
    console.log('validateRow(board): ', validateRow(board));
    return validateRow(board) && validateCols(board) && validateSubBoxes(board);
}

function main() {
    // const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    //     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    //     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    //     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    //     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    //     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    //     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    //     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    //     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

    // const board =
    //     [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    //         , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    //         , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    //         , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    //         , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    //         , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    //         , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    //         , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    //         , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

    const board = [
        [".", ".", ".", ".", "5", ".", ".", "1", "."],
        [".", "4", ".", "3", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", "3", ".", ".", "1"],
        ["8", ".", ".", ".", ".", ".", ".", "2", "."],
        [".", ".", "2", ".", "7", ".", ".", ".", "."],
        [".", "1", "5", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", "2", ".", ".", "."],
        [".", "2", ".", "9", ".", ".", ".", ".", "."],
        [".", ".", "4", ".", ".", ".", ".", ".", "."]];

    console.log(isValidSudoku(board));
}

main();