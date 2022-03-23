// Time O(N) | N: No of 1's in binary form of n
function countOne(n) {
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++
    }
    return count;
}

var hammingWeight = function (n) {
    return countOne(n);
};