// https://www.hackerrank.com/challenges/recursive-digit-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking
function main(input) {
    let ip_arr = input.split(' ');
    let k = Number(ip_arr[1]);
    let n = (digitSum(ip_arr[0].split('').map(Number)) * k).toString().split('').map(Number);
    let result = superDigit(n);
    console.log(result);
}

function superDigit(n_arr) {
    if (n_arr.length === 1) return n_arr[0];
    return superDigit(digitSum(n_arr).toString().split('').map(Number))
}

function digitSum(n_arr) {
    return n_arr.reduce((acc, val) => {
        return acc + val;
    }, 0)
}
main("9875 4");
main("123 3");