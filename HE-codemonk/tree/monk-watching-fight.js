// https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/practice-problems/algorithm/monk-watching-fight/
// left subtree <= parent < right subtree
function main(input) {
    const ip_arr = input.split('\n');
    const n = Number(ip_arr[0]);
    const node_arr = ip_arr[1].split(' ').map(Number);
    const tree = new Tree();
    for (let i = 0; i < n; i++) {
        tree.insert(node_arr[i]);
    }
    console.log(tree.root);
    console.log(tree.getHeight());
}
class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (this.root) {
            let currentNode = this.root;
            let found = false;
            while (!found) {
                if (currentNode.data >= data) {
                    // go to left subtree
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        found = true;
                    }
                } else {
                    // go to right subtree
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        found = true;
                    }
                }
            }
        } else {
            this.root = newNode;
        }
    }

    getHeight() {
        if (this.root) {
            const queue = [];
            let height = 1;
            let nodes_at_current_lvl = 1;
            let nodes_at_next_lvl = 0;
            queue.push(this.root);
            while(queue.length) {
                const currentNode = queue.shift();
                nodes_at_current_lvl--;
                if (currentNode.left) {
                    queue.push(currentNode.left);
                    nodes_at_next_lvl++;
                }
                if (currentNode.right) {
                    queue.push(currentNode.right);
                    nodes_at_next_lvl++;
                }
                if (nodes_at_current_lvl === 0) {
                    nodes_at_current_lvl = nodes_at_next_lvl;
                    nodes_at_next_lvl = 0;
                    height++;
                }
            }
            return height - 1;
        } else {
            return 0;
        }
    }
}

main("4\n2 1 3 4");
