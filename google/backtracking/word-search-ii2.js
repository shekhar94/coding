// Time: O(R*C*4^n) n = word length dfs 4^n
// Space visit O(R*C) dfs(n) 
var findWords = function (board, words) {
    const [R, C] = [board.length, board[0].length];
    const visit = new Array(R).fill(false).map(() => new Array(C).fill(false));
    const res = new Set();

    // Trie Implementation
    function TrieNode() {
        this.children = new Map();
        this.end = false;
    }
    // Init Trie
    const root = new TrieNode();

    function addWord(word) {
        let curr = root;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            if (!curr.children.has(c)) curr.children.set(c, new TrieNode());
            curr = curr.children.get(c);
        }
        curr.end = true;
    }

    // Add all the word to trie
    for (let word of words) addWord(word);

    function dfs(r, c, trieNode, word) {
        if (r < 0 || c < 0 || r === R || c === C || visit[r][c] || !trieNode.children.get(board[r][c])) return;

        word = word + board[r][c];
        visit[r][c] = true;
        trieNode = trieNode.children.get(board[r][c]);
        if (trieNode.end) res.add(word);
        dfs(r + 1, c, trieNode, word);
        dfs(r - 1, c, trieNode, word);
        dfs(r, c + 1, trieNode, word);
        dfs(r, c - 1, trieNode, word);
        visit[r][c] = false;
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            dfs(r, c, root, '');
        }
    }
    return [...res];
};