
function in_order_traversal(root, distance_from_root, map, depth) {
    if (!root) return;
    if ((distance_from_root >= 0 && !map.has(distance_from_root)) ||
        (distance_from_root < 0 && !map.has(Math.abs(distance_from_root)))) {
        map.set(distance_from_root, { val: root.val, depth });
    } else if (distance_from_root >= 0 && map.get(distance_from_root).depth > depth) {
        map.set(distance_from_root, { val: root.val, depth });
    }
    in_order_traversal(root.right, distance_from_root + 1, map, depth + 1);
    in_order_traversal(root.left, distance_from_root - 1, map, depth + 1);
}
function main() {
    // let root = {
    //     val: 1,
    //     left: {
    //         val: 2,
    //         left: {
    //             val: 4,
    //             left: null,
    //             right: null
    //         },
    //         right: {
    //             val: 5,
    //             left: null,
    //             right: {
    //                 val: 7,
    //                 left: null,
    //                 right: {
    //                     val: 8,
    //                     left: null,
    //                     right: {
    //                         val: 9,
    //                         left: null,
    //                         right: null
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     right: {
    //         val: 3,
    //         left: null,
    //         right: {
    //             val: 6,
    //             left: null,
    //             right: null
    //         }
    //     }
    // }
    let root = {
        val: 1,
        left: {
            val: 2,
            left: null,
            right: {
                val: 4,
                left: null,
                right: null
            }
        },
        right: {
            val: 3,
            left: null,
            right: null
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