// Print level order traversal of binary tree in reverse order
// e.g 
// level 0 -> 1
// level 1 -> 2, 3
// level 2 -> 4, 5, 6, 7
// O/P: 4, 5, 6, 7, 2, 3, 1

function reverse_level_order_traversal(root) {
    const queue = [];
    queue.push(root);
    const stack = [];
    let currentLevelNodes = [];
    let totalNodesAtCurrentLevel = 1;
    let totalNodesAtNextLevel = 0;
    while (queue.length) {
        const current = queue.shift();
        currentLevelNodes.push(current.data);
        totalNodesAtCurrentLevel--;
        if (current.left) {
            queue.push(current.left);
            totalNodesAtNextLevel++;
        }
        if (current.right) {
            queue.push(current.right);
            totalNodesAtNextLevel++;
        }
        if (totalNodesAtCurrentLevel === 0) {
            totalNodesAtCurrentLevel = totalNodesAtNextLevel;
            totalNodesAtNextLevel = 0;
            stack.push(currentLevelNodes);
            currentLevelNodes = [];
        }
    }

    while (stack.length) {
        process.stdout.write(`${stack.pop().join(' ')} `);
    }
    console.log('\n');
}

function main() {
    let root = {
        data: 1,
        left: {
            data: 2,
            left: {
                data: 4
            },
            right: {
                data: 5
            }
        },
        right: {
            data: 3,
            left: {
                data: 6
            },
            right: {
                data: 7
            }
        }
    }
    reverse_level_order_traversal(root);
}
main();