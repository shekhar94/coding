// https://www.geeksforgeeks.org/zigzag-tree-traversal/
// This problem can be solved using two stacks. 
// Assume the two stacks are current: currentlevel 
// and nextlevel. We would also need a variable to 
// keep track of the current level 
// order(whether it is left to right or right to left). 
// We pop from the currentlevel stack and print the nodes
//  value. Whenever the current level order is from 
//  left to right, push the nodes left child, then its 
//  right child to the stack nextlevel. 
//  Since a stack is a LIFO(Last-In-First_out) 
//  structure, next time when nodes are popped 
//  off nextlevel, it will be in the reverse order. 
//  On the other hand, when the current level order is 
//  from right to left, we would push the nodes right 
//  child first, then its left child. Finally, 
//  do-not forget to swap those two stacks at the end 
//  of each level(i.e., when current level is empty)

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = undefined;
    }
}

class BinaryTree {

    constructor() {
        this.root = undefined;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            // scan level by level 
            const queue = [];
            queue.push(this.root);
            while (queue.length) {
                const current = queue.shift();
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }

    zigzagTraversal() {
        const traversalArr = [];
        let currentLevel = [];
        let nextLevel = [];
        let leftToRight = true;
        currentLevel.push(this.root);
        while (currentLevel.length) {
            const current = currentLevel.pop();
            traversalArr.push(current.data);
            if (leftToRight) {
                if (current.left) {
                    nextLevel.push(current.left);
                }
                if (current.right) {
                    nextLevel.push(current.right);
                }
            } else {
                if (current.right) {
                    nextLevel.push(current.right);
                }
                if (current.left) {
                    nextLevel.push(current.left);
                }
            }
            if (currentLevel.length === 0) {
                currentLevel = nextLevel;
                nextLevel = [];
                leftToRight = !leftToRight;
            }
        }
        return traversalArr;
    }
}

function main() {
    const arr = [1, 2, 3, 7, 6, 5, 4];
    const bt = new BinaryTree();
    for (let i = 0; i < arr.length; i++) {
        bt.add(arr[i]);
    }
    console.log(bt.zigzagTraversal());
    // console.log(bt);
}

main();