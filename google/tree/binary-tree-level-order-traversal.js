var levelOrder = function (root) {
    if (!root) return [];

    let finalArr = [], tmpArr = [], queue = [];
    queue.push(root); queue.push('#');
    finalArr.push([root.val]);

    while (queue.length > 1) {
        const curr = queue.shift();
        if (curr === '#') {
            finalArr.push(tmpArr);
            tmpArr = [];
            queue.push('#');
        } else {
            if (curr.left) { queue.push(curr.left); tmpArr.push(curr.left.val); }
            if (curr.right) { queue.push(curr.right); tmpArr.push(curr.right.val); }
        }
    }
    return finalArr;
};