
function in_order_traversal(root, distance_from_root, map, depth) {
    if (!root) return;
    if (!map.has(distance_from_root)) {
        map.set(distance_from_root, { data: root.data, depth });
    } else if (map.get(distance_from_root).depth > depth) {
        map.set(distance_from_root, { data: root.data, depth });
    }
    in_order_traversal(root.left, distance_from_root - 1, map, depth + 1);
    in_order_traversal(root.right, distance_from_root + 1, map, depth + 1);
}

/* 
Print top view of binary tree
Level order traversal + Vertical order traversal
Add hd (horizontal distance) for each node. For root node hd = 0
Do level order traversal
First node in level order traversal for a given hd comes in top view
*/
function top_view(root) {
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
    // const node_distance_map = level_order_traversal(root);
    // console.log(node_distance_map.keys());
    // for (let key of Array.from(node_distance_map.keys()).sort((a, b) => a - b)) {
    //     console.log(node_distance_map.get(key));
    // }
    const map = new Map();
    in_order_traversal(root, 0, map, 0);
    const top_view_arr = [];
    for (let [key, value] of map) {
        top_view_arr.push(value);
    }
    console.log(top_view_arr);
}
main();