var openLock = function (deadends, target) {
    function getNext(curr, i, move) {
        const leftPart = curr.substring(0, i);
        const rightPart = curr.substring(i + 1);
        let middle = (Number(curr[i]) + move) % 10;
        if (middle < 0) {
            middle = 10 + middle;
        }
        return leftPart + middle + rightPart;
    }
    function getChildren(curr) {
        const children = [];
        for (let i = 0; i < curr.length; i++) {
            const c1 = getNext(curr, i, 1);
            const c2 = getNext(curr, i, -1);
            children.push.apply(children, [c1, c2]);
        }
        return children;
    }
    function bfs() {
        const start = "0000";
        if (deadends.includes(start)) return - 1;

        const queue = [];
        const visit = new Set();
        let level = 0;
        queue.push(start);
        visit.add(start);
        for (let deadend of deadends) visit.add(deadend)

        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                if (target === curr) return level;
                const children = getChildren(curr);
                for (let child of children) {
                    if (!visit.has(child)) {
                        visit.add(child);
                        queue.push(child);
                    }
                }
            }
            level += 1;
        }
        return -1;
    }
    return bfs();
};