// https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/practice-problems/algorithm/monk-visits-coderland-4/

function main(input) {
    const ip_arr = input.split('\n');
    const T = Number(ip_arr[0]);
    let j = 1;
    for (let i = 0; i < T; i++) {
        const N = Number(ip_arr[j]);
        j++;
        const C = ip_arr[j].map(Number);
        j++;
        const L = ip_arr[j].map(Number);
        j++;
        const min_cost = getMinCost(N, C, L);
    }
}

function getMinCost(N, C, L) {
    let total = 0;
    let smallest_till = [C[0]];
    let smallest = C[0];
    for (let i = 1; i < N; i++) {
        if (C[i] < smallest) {
            smallest_till[i] = C[i];
            smallest = C[i];
        } else {
            smallest_till[i] = smallest;
        }
    }
    console.log(smallest_till);
}

main("1\n2\n5 1\n1 2");