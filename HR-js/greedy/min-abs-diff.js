// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
function main(arr) {
    let len = arr.length;
    let min_p = arr[0] > 0 ? arr[0] : Infinity;
    let min_n = arr[0] < 0 ? arr[0] : 0;
    let abs_diff = Infinity;
    for (let i = 1; i < len; i++) {
        if (Math.abs(arr[i] - min_p) < abs_diff)
            abs_diff = Math.abs(arr[i] - min_p);
        if (Math.abs(arr[i] - min_n) < abs_diff) {
            abs_diff = Math.abs(arr[i] - min_n);
        }
        if (arr[i] < min_p) {
            if (min_p === Infinity) min_p = arr[i];
            min_p = arr[i];
        }
        if (arr[i] < min_n) {
            if (min_n === 0) min_n = arr[i];
            min_n = arr[i];
        }
    }
    console.log(abs_diff);
}
main([3, -7, 0]);