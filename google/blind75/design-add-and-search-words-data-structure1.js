function TrieNode() {
    this.children = new Map();
    this.end = false;
}

var WordDictionary = function () {
    this.root = new TrieNode();
};


WordDictionary.prototype.addWord = function (word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
        const children = curr.children;
        const c = word[i];
        if (!children.has(c)) {
            children.set(c, new TrieNode());
        }
        curr = children.get(c);
    }
    curr.end = true;
};


WordDictionary.prototype.search = function (word) {
    function helper(root, idx) {
        let curr = root;

        for (let i = idx; i < word.length; i++) {
            const children = curr.children;
            const c = word[i]
            if (c === '.') {
                for (let child of [...children.values()]) {
                    if (helper(child, i + 1)) return true;
                }
                return false;
            } else {
                if (!children.has(c)) return false;
                curr = children.get(c);
            }

        }
        return curr.end
    }
    return helper(this.root, 0);
};
