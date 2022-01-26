// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

class Tree {

    constructor() {
        this.root = new Node(1, [
            new Node(3, [
                new Node(5, null),
                new Node(6, null)
            ]),
            new Node(2, null),
            new Node(4, null)
        ]);
    }

    isQueueEmpty(queue) {
        return queue.length === 0;
    }

    levelOrder() {
        const queue = [this.root];
        let nodeCountCurrentLevel = 1;
        let nodeCountNextLevel = 0;
        let currentLevelNodes = [];
        const finalArr = [];

        while (!this.isQueueEmpty(queue)) {
            const currentNode = queue.shift();
            if (!currentNode) continue;
            currentLevelNodes.push(currentNode.val);
            nodeCountCurrentLevel -= 1;


            const { children } = currentNode;
            if (children) {
                queue.push.apply(queue, children);
                nodeCountNextLevel += children.length;
            }

            if (nodeCountCurrentLevel === 0) {
                finalArr.push(currentLevelNodes);
                nodeCountCurrentLevel = nodeCountNextLevel;
                nodeCountNextLevel = 0;
                currentLevelNodes = [];
            }
        }

        return finalArr;

    }

    printFinalArr() {
        const finalArr = this.levelOrder();
        finalArr.forEach(item => {
            console.log(item);
        });
    }
}

const tree = new Tree();
tree.printFinalArr();

