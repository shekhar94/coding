// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function main(input) {
    let ip_arr = input.split("\n");
    let len = Number(ip_arr[0]);
    let unsorted_arr = ip_arr[1].split(' ').map(Number);
    let min_swap = findMinSwap(len, unsorted_arr);
    console.log(min_swap);
}

function findMinSwap(len, unsorted_arr) {
    let sorted_arr = unsorted_arr.slice().sort((a, b) => a - b);
    let position_map = new Map();
    sorted_arr.forEach((ele, index) => {
        position_map.set(ele, index);
    });
    let visited = {};
    let total_swap = 0;
    for (let i = 0; i < len; i++) {
        if (visited[i] || position_map[unsorted_arr[i]] === i)
            continue;
        let circle_size = 0;
        let j = i;
        while (!visited[j]) {
            visited[j] = true;
            j = position_map.get(unsorted_arr[j]);
            circle_size++;
        }
        total_swap += (circle_size - 1);
    }
    return total_swap;
}
// main("4\n4 3 1 2");
main("5\n2 3 4 1 5");