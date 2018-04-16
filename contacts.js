function main(input) {
    var ipArr = input.split('\n');
    var noOfOperations = Number(ipArr[0]);
    var len = ipArr.length;
    for (let i = 1; i < len; i++) {
        let query = ipArr[i].split(' ');
        if (query[0] === 'add') {
            trie.insert(query[1]);
        } else {
            console.log(trie.find(query[1]));
        }
    }
}
class Node {
    constructor(char) {
        this.prefixes = 0;
        this.char = char;
        this.child = new Map();
        this.isEndOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node('*');
    }
    insert(str) {
        let strArr = str.split('');
        let len = strArr.length;
        let currentNode = this.root;
        let pointer = 0;
        let currentChar = strArr[pointer];
        this.insertChar(currentNode, currentChar, pointer, len, strArr);
    }
    insertChar(currentNode, currentChar, pointer, len, strArr) {
        if (currentNode.child.has(currentChar) && (pointer + 1) < len) {
            currentNode = currentNode.child.get(currentChar);
            currentChar = strArr[++pointer];
            currentNode.prefixes++;
            this.insertChar(currentNode, currentChar, pointer, len, strArr);
        } else {
            let node = new Node(currentChar);
            if (pointer === len - 1) {
                node.isEndOfWord = true;
            }
            currentNode.prefixes++;
            currentNode.child.set(currentChar, node);
            if ((pointer + 1) < len) {
                currentNode = currentNode.child.get(currentChar);
                currentChar = strArr[++pointer];
            }
            if (!currentNode.child.has(currentChar)) {
                this.insertChar(currentNode, currentChar, pointer, len, strArr);
            }
        }
    }
    find(str) {
        let strArr = str.split('');
        let len = strArr.length;
        let currentNode = this.root;
        let pointer = 0;
        let currentChar = strArr[pointer];
        this.findChar(currentNode, currentChar, pointer, len, strArr);
    }
    findChar(currentNode, currentChar, pointer, len, strArr) {
        if (currentNode.child.has(currentChar) && (pointer + 1) < len) {
            currentNode = currentNode.child.get(currentChar);
            currentChar = strArr[++pointer];
            return this.findChar(currentNode, currentChar, pointer, len, strArr);
        } else {
            if (pointer < len) return 0;
            return currentNode.prefixes;
        }
    }
}
var trie = new Trie();
// trie.insert('she');

main("4\nadd hack\nadd hackerrank\nfind hac\nfind hak");