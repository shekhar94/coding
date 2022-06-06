// Time O(N)
// Space: Last level will have N/2 nodes / space occupied by queue will be O(N) 
var connect = function (root) {
    if (!root) return root;
    const queue = [root];

    while (queue.length) {
        // len represents no of nodes at current level in tree
        const len = queue.length;
        for (let i = 0; i < len - 1; i++) {
            const curr = queue.shift();
            curr.next = queue[0];
            if (curr.left && curr.right) queue.push.apply(queue, [curr.left, curr.right]);
        }
        const last = queue.shift();
        last.next = null;
        if (last.left && last.right) queue.push.apply(queue, [last.left, last.right]);
    }
    return root;
};

/* 
Time: O(N)
Space: O(1) no additional ds is used for traversing the nodes
*/
var connect = function (root) {
    let [curr, next] = [root, root ? root.left : null];

    while (curr && next) {
        curr.left.next = curr.right;
        if (curr.next) curr.right.next = curr.next.left;

        curr = curr.next;
        if (!curr) {
            curr = next;
            next = curr.left;
        }
    }
    return root;

};