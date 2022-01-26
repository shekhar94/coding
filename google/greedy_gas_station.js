function editorialSol(gas, cost) {
    let sumGas = 0;
    let sumCost = 0;
    let start = 0;
    let tank = 0;
    for (let i = 0; i < gas.length; i++) {
        sumGas += gas[i];
        sumCost += cost[i];
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    if (sumGas < sumCost) {
        return -1;
    } else {
        return start;
    }
}



function canCompleteCircuit(gasAvailable, cost) {
    let startingPoint = 0;
    let currentStation = 0;
    let totalGas = 0;
    let startingPointMap = new Map();
    let visitedStationCount = 0;

    if (gasAvailable.length === 1 && gasAvailable[0] >= cost[0]) return 0;
    else if (gasAvailable.length === 1) return -1;

    while (true) {
        if (!startingPointMap.has(startingPoint)) {
            startingPointMap.set(startingPoint, true);
        } else if (visitedStationCount === gasAvailable.length) {
            return startingPoint;
        } else if (startingPointMap.has(startingPoint) && currentStation === startingPoint) {
            return -1;
        }

        totalGas += gasAvailable[currentStation];

        if (totalGas >= cost[currentStation]) {
            totalGas -= cost[currentStation];
            console.log('totalGas: ', totalGas);
            currentStation = (currentStation + 1) % gasAvailable.length;
            console.log('currentStation: ', currentStation);
            visitedStationCount++;
            console.log('visitedStationCount: ', visitedStationCount);

        } else {
            visitedStationCount = 0;
            totalGas = 0;
            startingPoint = (currentStation + 1) % gasAvailable.length;
            currentStation = startingPoint;
            console.log('new start station:', startingPoint);
        }
    }
}

function main() {
    // const A = [1, 2]
    // const B = [2, 1]
    const A = [1, 3, 4, 2];
    const B = [2, 1, 4, 3];
    // const A = [1, 3, 4, 2];
    // const B = [2, 4, 4, 3];
    // console.log(canCompleteCircuit(A, B))
    console.log(editorialSol(A, B))
}

main();