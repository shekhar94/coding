/* 
Author: Shekhar Suman
https://www.hackerrank.com/challenges/ctci-coin-change/problem
*/
main("4 3\n1 2 3");

function main(input) {
    let ip_arr = input.split("\n");
    let nm = ip_arr[0].split(" ").map(Number);
    let c = ip_arr[1].split(" ").map(Number);
    let count_arr = [];
    console.log(findNoOfWays(c, nm[1] - 1, nm[0], count_arr));
}

function findNoOfWays(s, m, n, count_arr) {
    let count = 0;
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    }
    if (m < 0) {
        return 0;
    }
    if (count_arr[m] && count_arr[m][n]) {
        return count_arr[m][n];
    }
    if (!count_arr[m]) {
        count_arr[m] = [];
    }
    count += findNoOfWays(s, m - 1, n, count_arr) + findNoOfWays(s, m, n - s[m], count_arr);
    count_arr[m][n] = count;
    return count;
}