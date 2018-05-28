/* 
    Author: shekhar suman 28/05/2018
    https://www.hackerrank.com/challenges/ctci-big-o/problem
*/

function checkPrime(num) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return num !== 1 ? isPrime : false;
}

function main(input) {
    let ip_arr = input.split("\n").map(Number);
    let t = ip_arr[0];
    for (let i = 1; i < ip_arr.length; i++) {
        let isPrime = checkPrime(ip_arr[i]);
        if (isPrime) {
            console.log("Prime");
        } else {
            console.log("Not prime");
        }
    }
}
main("3\n12\n5\n7");