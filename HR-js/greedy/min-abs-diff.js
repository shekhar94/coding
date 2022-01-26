// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
function min_abs_diff(arr) {
    let min_diff = Infinity;
    arr.sort((e1, e2) => e1 - e2);
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            const diff = Math.abs(arr[i] - arr[i + 1]);
            if (diff < min_diff) min_diff = diff;
        }
    }
    return min_diff;
}

function main(arr) {
    console.log(min_abs_diff(arr));
}
main([3, -7, 0]);