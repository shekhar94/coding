var missingNumber = function (nums) {
    const n = nums.length;
    // sum of numbers from 0 to n = n*(n+1)/2
    // sum the numbers in given array and minus from total sum
    // will get the missing number O(N) Time
    return (n * (n + 1) / 2) - (nums.reduce((acc, val) => {
        acc += val;
        return acc;
    }, 0));
};


// Bit manipulation
var missingNumber = function (nums) {
    // a^b^b=a
    return nums.reduce((acc, val, idx) => {
        acc = acc ^ val ^ idx;
        return acc;
    }) ^ nums.length;

};