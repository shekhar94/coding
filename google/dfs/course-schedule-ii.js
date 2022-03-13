// DFS, Topological Sorting
function dfs(adjList, visited, order, i) {
    if (adjList[i].length === 0) { // There are no prerequisites for taking this course
        order.add(i);
        return true;
    }
    if (visited[i]) return false; // cycle in graph
    visited[i] = true;

    for (let j = 0; j < adjList[i].length; j++) {
        if (!dfs(adjList, visited, order, adjList[i][j])) return false;
    }
    adjList[i] = []; // when all the prerequisites are completed reset the prereq array
    order.add(i);
    return true;
}

var findOrder = function (numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill(0).map(() => new Array());
    const visited = new Array(numCourses).fill(false);
    const order = new Set();

    for (let i = 0; i < prerequisites.length; i++) {
        const [ai, bi] = prerequisites[i]; // you must take course bi first if you want to take ai
        adjList[ai].push(bi); // Edge from bi to ai
    }

    for (let i = 0; i < numCourses; i++) {
        // If for any node dfs fails means a cycle is detected and 
        // Courses cann't be finished in order
        if (!dfs(adjList, visited, order, i)) return [];
    }

    return [...order];
};

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));