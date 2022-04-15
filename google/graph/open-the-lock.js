// Time O(10*4) -> O(1) space O(10*4) -> O(1)
class ShortestPath {
    constructor(deadends, target) {
        this.deadends = deadends;
        this.target = target;
        this.visit = new Set(deadends); // No need to visit deadends
        this.start = "0000";
    }

    getChildren(node) {
        const children = [];
        for (let i = 0; i < node.length; i++) {
            const c1 = node.substring(0, i) + (Number(node[i]) + 1) % 10 + node.substring(i + 1);
            const c2 = node.substring(0, i) + ((Number(node[i]) - 1) + 10) % 10 + node.substring(i + 1);
            children.push(c1); children.push(c2);
        }
        return children;
    }

    bfs() {
        const start = this.start;
        if (this.deadends.includes(start)) return -1;
        const visit = this.visit;
        const queue = [start];
        visit.add(start);
        let level = 0;

        while (queue.length > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                if (curr === this.target) return level;
                const children = this.getChildren(curr);
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


}

var openLock = function (deadends, target) {
    const sp = new ShortestPath(deadends, target);
    return sp.bfs();
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));