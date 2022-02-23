// https://leetcode.com/problems/the-skyline-problem/
// https://www.educative.io/page/11000001/70001

function getPoints(buildings) {
    // start and end points for each building
    const points = [];
    for (let i = 0; i < buildings.length; i++) {
        const [x1, x2, y] = buildings[i];
        points.push({ x: x1, y, start: true }, { x: x2, y, start: false });
    }
    return points;
}

function getSortedPoints(points) {
    return points.sort((a, b) => {
        // If x is not same use ordering based on x
        // If x is same for both a and b:
        // 1. a is start point and b is also a start point pick the higher height(y)
        // 2. a and b both are end points pick lower height(y)
        // 3. one is start and other is end point then pick the start 
        if (a.x !== b.x) return a.x - b.x;
        else return (a.start ? -a.y : a.y) - (b.start ? -b.y : b.y);
    });
}

// Not too efficient: Used to simulate TreeMap
function getMaxKeyFromMap(map) {
    return [...map.keys()].reduce((max, val) => {
        max = Math.max(max, val); return max;
    }, 0);
}

function getSkyline(buildings) {
    const points = getPoints(buildings);
    const sortedPoints = getSortedPoints(points);

    const queue = new Map()
    queue.set(0, 1);
    let previousMaxHeight = 0;
    const res = [];
    for (let i = 0; i < sortedPoints.length; i++) {
        const { x, y, start } = sortedPoints[i];
        if (start) {
            if (!queue.has(y)) queue.set(y, 0);
            queue.set(y, queue.get(y) + 1);
        } else { // end of building decrement the count or remove height from map
            if (queue.get(y)) queue.set(y, queue.get(y) - 1)
            if (queue.get(y) === 0) queue.delete(y);
        }
        let currentMaxHeight = getMaxKeyFromMap(queue); // current height after addition or removal of building x
        if (previousMaxHeight !== currentMaxHeight) { // if height changes from last height then x is critical
            res.push([x, currentMaxHeight]);
            previousMaxHeight = currentMaxHeight;
        }
    }
    return res;
}

function main() {
    // const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
    // const buildings = [[0, 2, 3], [2, 5, 3]];
    const buildings = [[1, 3, 4], [3, 4, 4], [2, 6, 2], [8, 11, 4], [7, 9, 3], [10, 11, 2]];
    console.log(getSkyline(buildings));
}

main();