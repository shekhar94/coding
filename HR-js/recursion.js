/* 
    Author: shekhar suman
    https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
*/
main("3\n1\n3\n7");
// recursive approach only 5 test cases passing
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

// DP approach final
function findNoOfWays(height_of_staircase, countArr) {
    let count = 0;
    if (height_of_staircase === 0) { // possible solution only if final height is 0
        return 1;
    } else if (height_of_staircase < 0) {
        return 0;
    }
    if (countArr[height_of_staircase]) {
        return countArr[height_of_staircase];
    }
    let c_1, c_2, c_3;
    c_1 = findNoOfWays(height_of_staircase - 1, countArr);
    c_2 = findNoOfWays(height_of_staircase - 2, countArr);
    c_3 = findNoOfWays(height_of_staircase - 3, countArr);
    count += c_1 + c_2 + c_3;
    countArr[height_of_staircase] = count;
    return count;
}

function main(input) {
    let ip_arr = input.split("\n").map(Number);
    let no_of_staircases = ip_arr[0];
    for (let i = 1; i < ip_arr.length; i++) {
        let count = [];
        console.log(findNoOfWays(ip_arr[i], count));
    }
}