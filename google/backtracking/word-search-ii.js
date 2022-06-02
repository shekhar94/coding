// // O(R*C*4^n) n = word length dfs 4^n
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let tmp = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            const children = tmp.children;
            if (!children.has(char)) children.set(char, new TrieNode());
            tmp = children.get(char);
        }
        tmp.isEnd = true;
    }
}

var findWords = function (board, words) {
    const trie = new Trie();
    const [R, C] = [board.length, board[0].length];
    const visit = new Array(R).fill(false).map(() => new Array(C).fill(false));

    for (let word of words) {
        trie.addWord(word);
    }
    let res = new Set();

    function dfs(trieNode, r, c, word) {
        if (r < 0 || c < 0 || r === R || c === C || visit[r][c] ||
            !trieNode.children.has(board[r][c])) return;

        word = word + board[r][c];
        visit[r][c] = true;
        trieNode = trieNode.children.get(board[r][c]);
        if (trieNode.isEnd) res.add(word);
        dfs(trieNode, r + 1, c, word);
        dfs(trieNode, r - 1, c, word);
        dfs(trieNode, r, c + 1, word);
        dfs(trieNode, r, c - 1, word);
        visit[r][c] = false;
    }


    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            dfs(trie.root, i, j, '');
        }
    }

    return [...res];
};

console.log(findWords([["o", "a", "a", "n"],
["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]],
    ["oath", "pea", "eat", "rain"]));