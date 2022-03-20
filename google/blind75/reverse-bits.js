// Using js functions
var reverseBits = function (n) {
    return Number.parseInt(n
        .toString(2) // convert to redix 2 i.e: Binary form
        .split('') // split to get array of 0's and 1's
        .reverse() // reverse the array
        .join('') // merge the array to get reversed binary representation 
        .padEnd(32, '0'), 2); // add 0's to the end if needed
}

var reverseBits = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res <<= 1;
        res += n & 1;
        n >>>= 1;
    }
    return res >>> 0; // using unsigned shift operator is important to avoid getting -ve values
};