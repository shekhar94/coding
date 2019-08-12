// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
// Include or Exclude an element is the two options
// when an element is excluded max_sum = max(max_sum_excluding_current[i - 1], max_sum_including_current[i - 1])
// when an element is excluded max_sum = max_sum_excluding_current[i - 1] + arr[i]
function maxSubsetSum(arr) {
    let max_sum_including_current = [arr[0]];
    let max_sum_excluding_current = [0];
    for (let i = 1; i < arr.length; i++) {
        max_sum_excluding_current.push(Math.max(max_sum_excluding_current[i - 1], max_sum_including_current[i - 1]));
        max_sum_including_current.push(max_sum_excluding_current[i - 1] + arr[i]);
        // console.log(`max_sum_excluding_current:: ${max_sum_excluding_current}\nmax_sum_including_current:: ${max_sum_including_current}`);
    }
    return Math.max(max_sum_excluding_current[arr.length - 1], max_sum_including_current[arr.length - 1]);
}


function main() {
    const arr = [-2, 1, 3, -4, 5];
    const max_sum = maxSubsetSum(arr);
    console.log(max_sum);
    // [-2, 1, 3, -4, 5]
    // [-2, -2, 1, 3, ] i
    // [0, 1, 3, 1, ] e
}

main();