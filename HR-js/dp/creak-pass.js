/*jshint esversion:6*/
// https://www.hackerrank.com/challenges/password-cracker/problem
// function main(input) {
//     const ip_arr = input.split('\n');
//     const t = Number(ip_arr[0]);
//     let pointer = 0;
//     for (let j = 0; j < t; j++) {
//         ++pointer;
//         const strings_arr = ip_arr[++pointer].split(' ');
//         const login_attempt = ip_arr[++pointer];
//         for (let i = 0; i < strings_arr.length; i++) {
//             trie.insert(strings_arr[i]);
//         }
//         // console.log(trie);
//         trie.find(login_attempt);
//         res_strings_arr = [];
//     }
// }
// class Node {
//     constructor(char) {
//         this.prefixes = 0;
//         this.char = char;
//         this.child = new Map();
//         this.is_end_of_word = false;
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new Node('*');
//     }

//     insert(str) {

//         let str_arr = str.split(''),
//             len = str_arr.length,
//             current_node = this.root,
//             pointer = 0,
//             current_char = str_arr[pointer];

//         this.insertChar(current_node, current_char, pointer, len, str_arr);
//     }

//     insertChar(current_node, current_char, pointer, len, str_arr) {
//         if (current_node.child.has(current_char) && (pointer + 1) < len) {
//             current_node = current_node.child.get(current_char);
//             current_char = str_arr[++pointer];
//             current_node.prefixes++;
//             this.insertChar(current_node, current_char, pointer, len, str_arr);
//         } else {
//             let node = new Node(current_char);
//             if (pointer === len - 1) {
//                 node.is_end_of_word = true;
//             }
//             node.prefixes++;
//             current_node.child.set(current_char, node);
//             if ((pointer + 1) < len) {
//                 current_node = current_node.child.get(current_char);
//                 current_char = str_arr[++pointer];
//             }
//             if (!current_node.child.has(current_char)) {
//                 this.insertChar(current_node, current_char, pointer, len, str_arr);
//             }
//         }
//     }

//     find(str) {

//         let str_arr = str.split(''),
//             len = str_arr.length,
//             current_node = this.root,
//             pointer = 0,
//             start = 0,
//             current_char = str_arr[pointer];

//         this.findChar(current_node, this.root, current_char, pointer, start, len, str_arr);
//     }


//     findChar(current_node, root, current_char, pointer, start, len, str_arr) {
//         if (current_node.is_end_of_word) {
//             current_node = root;
//             res_strings_arr.push(str_arr.slice(start, pointer).join(''));
//             start = pointer;
//         }
//         if (current_node.child.has(current_char) && (pointer) < len) {
//             current_node = current_node.child.get(current_char);
//             current_char = str_arr[++pointer];
//             this.findChar(current_node, root, current_char, pointer, start, len, str_arr);
//         } else {
//             if (pointer === len) console.log(res_strings_arr.join(' '));
//             else console.log('WRONG PASSWORD');
//         }
//     }
// }

// var trie = new Trie();
// var res_strings_arr = [];
// main("6\nbecause can do must we what\nwedowhatwemustbecausewecan");
// main("2\nhello planet\nhelloworld");
let memo = {};

function main(input) {
    const ip_arr = input.split('\n');
    const t = Number(ip_arr[0]);
    let pointer = 0;
    for (let j = 0; j < t; j++) {
        ++pointer;
        keys = {};
        const strings_arr = ip_arr[++pointer].split(' ');
        const login_attempt = ip_arr[++pointer];
        for (let i = 0; i < strings_arr.length; i++) {
            keys[strings_arr[i]] = true;
        }
        crack(login_attempt, keys);
    }
}

function crack(login_attempt, keys) {
    let res = [];
    crakeHelper(login_attempt, res, keys);
    if (res.length > 0) console.log(res.reverse().join(' '));
    else console.log('WRONG PASSWORD');
}

function crakeHelper(password, res, keys) {
    if (password.length === 0) return true;
    if (memo[password]) return false;

    for (const pass of Object.keys(keys)) {
        if (password.slice(0, pass.length) === pass) {
            res.push(pass);
            console.log(password);
            memo[password] = true;
            if (crakeHelper(password.slice(pass.length), res, keys)) {
                return true;
            }
            res.splice(-1, 1);
        }
    }
    return false;
}
main("3\n6\nbecause can do must we what\nwedowhatwemustbecausewecan\n2\nhello planet\nhelloworld\n3\nab abcd cd\nabcd");