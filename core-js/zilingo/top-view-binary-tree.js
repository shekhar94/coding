
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
    const map = new Map();
    in_order_traversal(root, 0, map, 0);
    const top_view_arr = [];
    for (let [key, value] of map) {
        top_view_arr.push(value);
    }
    console.log(top_view_arr);
}
main();