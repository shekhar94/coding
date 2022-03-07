// Solution Starts Here
class Node {
    constructor(val) {
        this.val = val;
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node('root'); // create a root node
    }

    insert(word) {
        const len = word.length;
        let root = this.root;
        for (let i = 0; i < len; i++) {
            const children = root.children;
            const char = word[i];
            if (!children.has(char)) { // the char doesn't exist in this path so add a new node
                const newNode = new Node(char);
                children.set(char, newNode);
            }
            root = children.get(char);
            if (i === len - 1) root.isEnd = true; // mark as end of the word
        }
    }

    search(word) {
        const len = word.length;
        let root = this.root;
        for (let i = 0; i < len; i++) {
            const children = root.children;
            const char = word[i];
            if (!children.has(char)) return false;
            else {
                root = children.get(char);
            }
            if (i === len - 1 && !root.isEnd) return false; // the last node should also be the end char for a word
        }
        return true;
    }

    startsWith(prefix) {
        const len = prefix.length;
        let root = this.root;
        for (let i = 0; i < len; i++) {
            const children = root.children;
            const char = prefix[i];
            if (!children.has(char)) return false;
            else {
                root = children.get(char);
            }
        }
        return true; // just mathing all the char should be enough we don't need to check for end as this is prefix check
    }
}
// Solution Ends Here

function main() {
    const operations = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
    const words = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
    const res = [null];
    const trie = new Trie();
    for (let i = 1; i < operations.length; i++) {
        const op = operations[i];
        const word = words[i][0];
        let r = null;
        switch (op) {
            case "insert":
                trie.insert(word);
                break;
            case "search":
                r = trie.search(word);
                break;
            case "startsWith":
                r = trie.startsWith(word);
                break;
        }
        res.push(r);
    }
    console.log(res);
}

main();