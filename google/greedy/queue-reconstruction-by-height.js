function reconstructQueue1(people) {
    return people
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
        .reduce((acc, p) => {
            acc.splice(p[1], 0, p);
            return acc;
        }, []);
}

function getGreaterEqualCountBeforei(finalQueue, i, sortedByHeight) {
    return finalQueue.reduce((acc, val) => {
        if (val[0] >= sortedByHeight[i][0]) acc += 1;
        return acc;
    }, 0)
}

function reconstructQueue(people) {
    const sortedByHeight = people.sort((a, b) => a[0] - b[0]);

    let finalQueue = [], added = [];
    while (finalQueue.length < sortedByHeight.length) {
        for (let i = 0; i < sortedByHeight.length; i++) {
            if (!added[i]) {
                const count = getGreaterEqualCountBeforei(finalQueue, i, sortedByHeight);
                if (count === sortedByHeight[i][1]) {
                    finalQueue.push(sortedByHeight[i]);
                    added[i] = true; break;
                }
            }
        }
    }
    return finalQueue;
}




function main() {
    const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
    // const people = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]];
    console.log(reconstructQueue1(people));
}

main();