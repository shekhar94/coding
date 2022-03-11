function recursive(preMap, node, vis) {
    if (!preMap.has(node) || preMap.get(node).length === 0) return true;
    if (vis.has(node)) return false;
    vis.add(node);

    const pre = preMap.get(node);
    for (let i = 0; i < pre.length; i++) {
        if (!recursive(preMap, pre[i], vis)) return false;
    }
    preMap.set(node, []);
    return true;
}

var canFinish = function (numCourses, prerequisites) {
    const vis = new Set();
    const preMap = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        const [ai, bi] = prerequisites[i];
        if (!preMap.has(bi)) preMap.set(bi, [ai]);
        else preMap.get(bi).push(ai);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!recursive(preMap, i, vis)) return false;
    }
    return true;
}

console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(canFinish(2, [[1, 0]]));