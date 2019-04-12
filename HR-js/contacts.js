function main(input) {
    var ipArr = input.split('\n');
    var noOfOperations = Number(ipArr[0]);
    var len = ipArr.length;
    for (let i = 1; i < len; i++) {
        let query = ipArr[i].split(' ');
        if (query[0] === 'add') {
            trie.insert(query[1]);
        } else {
            trie.find(query[1]);
        }
    }
}
class Node {
    constructor(char) {
        this.prefixes = 0;
        this.char = char;
        this.child = new Map();
        // this.is_end_of_word = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node('*');
    }

    insert(str) {

        let str_arr = str.split(''),
            len = str_arr.length,
            current_node = this.root,
            pointer = 0,
            current_char = str_arr[pointer];

        this.insertChar(current_node, current_char, pointer, len, str_arr);
    }

    insertChar(current_node, current_char, pointer, len, str_arr) {
        if (current_node.child.has(current_char) && (pointer + 1) < len) {
            current_node = current_node.child.get(current_char);
            current_char = str_arr[++pointer];
            current_node.prefixes++;
            this.insertChar(current_node, current_char, pointer, len, str_arr);
        } else {
            let node = new Node(current_char);
            // if (pointer === len - 1) {
            //     node.is_end_of_word = true;
            // }
            node.prefixes++;
            current_node.child.set(current_char, node);
            if ((pointer + 1) < len) {
                current_node = current_node.child.get(current_char);
                current_char = str_arr[++pointer];
            }
            if (!current_node.child.has(current_char)) {
                this.insertChar(current_node, current_char, pointer, len, str_arr);
            }
        }
    }

    find(str) {

        let str_arr = str.split(''),
            len = str_arr.length,
            current_node = this.root,
            pointer = 0,
            current_char = str_arr[pointer];

        this.findChar(current_node, current_char, pointer, len, str_arr);
    }

    findChar(current_node, current_char, pointer, len, str_arr) {
        if (current_node.child.has(current_char) && (pointer) < len) {
            current_node = current_node.child.get(current_char);
            current_char = str_arr[++pointer];
            this.findChar(current_node, current_char, pointer, len, str_arr);
        } else {
            if (pointer < len) console.log(0);
            else console.log(current_node.prefixes);
        }
    }
}

var trie = new Trie();

main("10\nadd tree\nadd trie\nadd algo\nadd assoc\nadd all\nadd also\nfind tr\nfind a\nfind ass\nfind f");