/* 
Recursive function for printing vertical order traversal of a 
binary tree 
*/
function traverse(root, node_distance_map, hd) {
    if (!root) return;
    if (!node_distance_map.has(hd)) {
        // if for a given hd no nodes found yet 
        // initialize hd value as empty array
        node_distance_map.set(hd, []);
    }
    node_distance_map.get(hd).push(root.data);
    // for each left traversal reduce hd by 1
    traverse(root.left, node_distance_map, hd - 1);
    // for each left traversal increment hd by 1
    traverse(root.right, node_distance_map, hd + 1);
}
/* 
Print vertical order traversal of a binary tree
for every hd (horizontal distance) save the node in 
map (hd, [nodes for given hd])
*/
function vertical_order_traversal(root) {
    let node_distance_map = new Map();
    traverse(root, node_distance_map, 0);
    console.log(node_distance_map);
}
/* 
Print top view of binary tree
Level order traversal + Vertical order traversal
Add hd (horizontal distance) for each node. For root node hd = 0
Do level order traversal
First node in level order traversal for a given hd comes in top view
*/
function level_order_traversal(root) {
    const queue = [];
    const node_distance_map = new Map();
    root.hd = 0;
    queue.push(root);
    while (queue.length) {
        const tmp = queue.shift();
        if (!node_distance_map.has(tmp.hd)) {
            node_distance_map.set(tmp.hd, tmp.data);
        }
        if (tmp.left) {
            tmp.left.hd = tmp.hd - 1;
            queue.push(tmp.left);
        }
        if (tmp.right) {
            tmp.right.hd = tmp.hd + 1;
            queue.push(tmp.right);
        }
    }
    console.log(node_distance_map);
    return node_distance_map;
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
    const node_distance_map = level_order_traversal(root);
    console.log(node_distance_map.keys());
    for (let key of Array.from(node_distance_map.keys()).sort((a, b) => a - b)) {
        console.log(node_distance_map.get(key));
    }
    // vertical_order_traversal(root);
}

main();