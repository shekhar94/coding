// https://practice.geeksforgeeks.org/problems/connect-nodes-at-same-level/1
class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
        this.nextRight = null;
    }
}

class Solution {
    constructor() {
        this.root = new Node(10);
        this.root.left = new Node(3);
        this.root.right = new Node(5);
        this.root.left.left = new Node(4);
        this.root.left.right = new Node(1);
        this.root.right.right = new Node(2);
    }

    connect() {
        const queue = [this.root];
        let nodeCountCurrentLevel = 1;
        let nodeCountNextLevel = 0;

        while (queue.length !== 0) {
            const currentNode = queue.shift();
            if (!currentNode) continue;
            nodeCountCurrentLevel -= 1;

            if (nodeCountCurrentLevel > 0) {
                const nextRight = queue[0];
                currentNode.nextRight = nextRight;
            }

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
                nodeCountCurrentLevel = nodeCountNextLevel;
                nodeCountNextLevel = 0;
            }
        }
    }
}