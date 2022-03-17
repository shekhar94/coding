class TrieNode {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let curr = this.root;
        for (let c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }
        curr.end = true;
    }

    search(word) {
        function helper(root, idx) {
            let curr = root;
            for (let i = idx; i < word.length; i++) {
                let c = word[i];
                if (c === '.') {
                    // using commented code gives bad alloc: Will be interested in knowing if anyone has found the reason why?
                    // for (let char of [...curr.children.keys()]) {
                    //     let child = curr.children.get(char);
                    //     if (helper(child, i + 1)) return true;
                    // }
                    for (let child of [...curr.children.values()]) {
                        if (helper(child, i + 1)) return true;
                    }
                    return false;
                } else {
                    if (!curr.children.has(c)) return false;
                    curr = curr.children.get(c);
                }
            }
            return curr.end;
        }
        return helper(this.root, 0);
    }
}
// Solution ends here

function main() {
    const operations = ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"];
    const words = [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]];
    const res = [null];
    const trie = new WordDictionary();
    for (let i = 1; i < operations.length; i++) {
        const op = operations[i];
        const word = words[i][0];
        let r = null;
        switch (op) {
            case "addWord":
                trie.addWord(word);
                break;
            case "search":
                r = trie.search(word);
                break;
        }
        res.push(r);
    }
    console.log(res);
}

main();