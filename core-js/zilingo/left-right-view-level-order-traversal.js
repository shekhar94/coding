/* 
Print left side view of binary tree
Do level order traversal
First node at each level comes in left side view of binary tree

Print right side view of binary tree
Do level order traversal
Last node at each level comes in right side view of binary tree
*/

function level_order_traversal(root) {
    const queue = [];
    queue.push(root);
    let no_of_nodes_at_current_level = 1;
    let no_of_nodes_at_next_level = 0;
    let level = 0;
    const level_node_map = new Map(); // to keep track of nodes at each level
    while (queue.length) {
        const tmp = queue.shift();
        if (!level_node_map.has(level)) {
            level_node_map.set(level, []);
        }
        level_node_map.get(level).push(tmp.data);
        no_of_nodes_at_current_level--;
        if (tmp.left) {
            queue.push(tmp.left);
            no_of_nodes_at_next_level++;
        }
        if (tmp.right) {
            queue.push(tmp.right);
            no_of_nodes_at_next_level++;
        }
        if (!no_of_nodes_at_current_level) {
            level++;
            no_of_nodes_at_current_level = no_of_nodes_at_next_level;
            no_of_nodes_at_next_level = 0;
        }
    }
    console.log(level_node_map);
}

function main() {
    let root = {
        data: 1,
        left: {
            data: 2,
            left: {
                data: 4,
                left: null,
                right: null
            },
            right: {
                data: 5,
                left: null,
                right: {
                    data: 7,
                    left: null,
                    right: {
                        data: 8,
                        left: null,
                        right: {
                            data: 9,
                            left: null,
                            right: null
                        }
                    }
                }
            }
        },
        right: {
            data: 3,
            left: null,
            right: {
                data: 6,
                left: null,
                right: null
            }
        }
    }
    level_order_traversal(root);
}
main();