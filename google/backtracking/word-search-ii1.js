var findWords = function (board, words) {
    function TrieNode() {
        this.children = new Map();
        this.end = false;
    }
    const root = new TrieNode();
    function addWord(word) {
        let node = root;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            if (!node.children.has(c)) node.children.set(c, new TrieNode());
            node = node.children.get(c);
        }
        node.end = true;
    }

    for (let word of words) addWord(word);

    const res = new Set();
    const visit = new Set();
    const [R, C] = [board.length, board[0].length];

    function dfs(r, c, tNode, word) {
        if (r < 0 || c < 0 || r === R || c === C || visit.has(`${r}-${c}`) || !tNode.children.has(board[r][c])) return;

        word = word + board[r][c];
        visit.add(`${r}-${c}`);
        tNode = tNode.children.get(board[r][c]);
        if (tNode.end) res.add(word);

        dfs(r + 1, c, tNode, word);
        dfs(r - 1, c, tNode, word);
        dfs(r, c + 1, tNode, word);
        dfs(r, c - 1, tNode, word);
        visit.delete(`${r}-${c}`);
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            dfs(r, c, root, '')
        }
    }
    return [...res];
};