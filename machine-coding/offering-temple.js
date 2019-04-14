// https://www.geeksforgeeks.org/temple-offerings/
/* 
To follow the given rule, a temple must be offered at least x+1 where x is maximum of following two.
  1. Number of temples on left in increasing order.
  2. Number of temples on right in increasing order.
*/
function main(input) {
  const ip_arr = input.split(" ").map(Number);
  const min_offering = find_min_offering(ip_arr);
  console.log(min_offering);
}

function find_min_offering(arr) {
  const left = new Array(arr.length); // store number of temples on left in increasing order.
  const right = new Array(arr.length); // store number of temples on right in increasing order.
  for (let i = 0; i < arr.length; i++) {
    const j = arr.length - (i + 1); // right to left side navigation index 
    if ((i === 0)) {
      // init first and last with 0
      left[i] = 0;
      right[j] = 0;
    } else {
      if (arr[i] > arr[i - 1]) {
        // add one until increasing sequence found
        left[i] = left[i - 1] + 1;
      } else {
        // reset to 0 when sequence breaks
        left[i] = 0;
      }
      if (arr[j] > arr[j + 1]) {
        // add one until increasing sequence found
        right[j] = right[j + 1] + 1;
      } else {
        // reset to 0 when sequence breaks
        right[j] = 0;
      }
    }
  }
  let total_offering = 0; 
  for (let i = 0; i < arr.length; i++) {
    const max = Math.max(left[i], right[i]);
    total_offering += max + 1;
  }
  return total_offering;
  // console.log(left, right);
}

// main("1 4 3 6 2 1");
main("1 2 2");
