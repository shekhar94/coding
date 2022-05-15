var canFinish = function (numCourses, prerequisites) {
    const preReq = new Map();
    const visit = new Set();

    for (let [a, b] of prerequisites) {
        if (!preReq.has(a)) preReq.set(a, []);
        preReq.get(a).push(b);
    }

    function dfs(curr) {
        if (!preReq.has(curr)) return true;
        if (visit.has(curr)) return false;
        visit.add(curr);

        for (let pre of preReq.get(curr)) {
            if (!dfs(pre)) return false;
        }
        preReq.delete(curr);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};

console.log(canFinish(3,
    [[2, 0], [2, 1]]));