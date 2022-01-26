// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/


class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Tree {

    constructor() {
        this.root = new Node(3);
        this.root.left = new Node(9);
        this.root.right = new Node(20);
        this.root.right.left = new Node(15);
        this.root.right.right = new Node(7);
    }

    isQueueEmpty(queue) {
        return queue.length === 0;
    }

    levelOrderBottom() {
        const finalArr = [];
        let nodeCountCurrentLevel = 1;
        let currentLevelNode = [];
        let nodeCountNextLevel = 0;
        const queue = [this.root];

        while (!this.isQueueEmpty(queue)) {
            const currentNode = queue.shift();
            if (!currentNode) continue;
            currentLevelNode.push(currentNode.val);
            nodeCountCurrentLevel -= 1;

            const { left: leftChild, right: rightChild } = currentNode;

            if (leftChild) {
                queue.push(leftChild);
                nodeCountNextLevel += 1;
            }

            if (rightChild) {
                queue.push(rightChild);
                nodeCountNextLevel += 1;
            }

            if (nodeCountCurrentLevel === 0) {
                // After visiting all nodes at this level add it to final arr
                finalArr.unshift(currentLevelNode);
                currentLevelNode = [];
                nodeCountCurrentLevel = nodeCountNextLevel;
                nodeCountNextLevel = 0;
            }
        }
        return finalArr;
    }

    printFinalArr() {
        const finalArr = this.levelOrderBottom();
        finalArr.forEach(item => {
            console.log(item);
        });
    }
}

const tree = new Tree();
tree.printFinalArr();


