var rightSideView = function (root) {
    function levelOrdrTrav() {
        const res = [];
        if (!root) return res;

        const queue = [];
        queue.push(root);
        while (queue.length) {
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const curr = queue.shift();
                if (i === levelSize - 1) res.push(curr.val);
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }
        return res;
    }
    return levelOrdrTrav();
};