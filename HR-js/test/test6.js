function main(input) {
    let ip_arr = input.split('\n');
    let t = Number(ip_arr[0]);
    let index = 1;
    for (let i = 0; i < t; i++) {
        let n = Number(ip_arr[index]);
        let cost_matrix = [];
        index++;
        for (let j = 0; j < n; j++) {
            cost_matrix.push(ip_arr[index].split(' ').map(Number));
            index++;
        }
        console.log(findMinCost(cost_matrix, n));
    }
}

function findMinCost(cost_matrix, n) {
    let last_min_index = -1;
    let min_cost = 0;
    for (let i = 0; i < n; i++) {
        last_min_index = findMinIndex(cost_matrix[i], last_min_index, n);
        min_cost += cost_matrix[i][last_min_index];
    }
    return min_cost;
}

function findMinIndex(arr, last_min_index) {
    let min_index = -1;
    let min = Infinity;
    for (let i = 0; i < 4; i++) {
        if (i === last_min_index) continue;
        if (arr[i] < min) {
            min_index = i;
            min = arr[i];
        }
    }
    return min_index;
}
main("1\n2\n2 3 4 5\n7 4 3 1");