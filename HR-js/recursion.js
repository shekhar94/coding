/* 
    https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
*/
main("3\n1\n3\n7");

// function findNoOfWays(height_of_staircase) {
//     let count = 0;
//     if (height_of_staircase === 0) { // possible solution only if final height is 0
//         return 1;
//     } else if (height_of_staircase < 0) {
//         return 0;
//     }
//     count += findNoOfWays(height_of_staircase - 1);
//     count += findNoOfWays(height_of_staircase - 2);
//     count += findNoOfWays(height_of_staircase - 3);
//     return count;
// }

function findNoOfWays(height_of_staircase, steps, count) {
    if (!count[height_of_staircase]) {
        count[height_of_staircase] = [];
    }
    if (height_of_staircase === 0) { // possible solution only if final height is 0
        count[height_of_staircase][steps] = 1;
    } else if (height_of_staircase < 0) {
        count[height_of_staircase][steps] = 0;
    } else if (count[height_of_staircase][steps]) {
        count[height_of_staircase][steps];
    } else {
        count[height_of_staircase][steps] += findNoOfWays(height_of_staircase - 1, 1, count);
        count[height_of_staircase][steps] += findNoOfWays(height_of_staircase - 2, 2, count);
        count[height_of_staircase][steps] += findNoOfWays(height_of_staircase - 3, 3, count);
        count[height_of_staircase][steps];
    }
}

function main(input) {
    let ip_arr = input.split("\n").map(Number);
    let no_of_staircases = ip_arr[0];
    for (let i = 1; i < ip_arr.length; i++) {
        let count = [];
        findNoOfWays(ip_arr[i], 1, count);
        findNoOfWays(ip_arr[i], 2, count);
        findNoOfWays(ip_arr[i], 3, count));
}
}