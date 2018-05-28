/* 
    https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
*/
main("3\n1\n3\n7");

function findNoOfWays(no_of_staircases, height_of_staircase) {

}

function main(input) {
    let ip_arr = input.split("\n").map(Number);
    let no_of_staircases = ip_arr[0];
    for (let i = 1; i < ip_arr.length; i++) {
        console.log(findNoOfWays(no_of_staircases, ip_arr[i]));
    }
}