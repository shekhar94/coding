
function singleNumbers(nums) {
    let xorsum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        xorsum = xorsum ^ nums[i];
    }
    const rightMostSetBit = xorsum & ~(xorsum - 1);

    let x = 0;
    let y = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & rightMostSetBit) {
            x ^= nums[i];
        } else {
            y ^= nums[i];
        }
    }
    return [x, y].sort((a, b) => a - b);
}

singleNumbers([1, 2, 3, 2, 1, 4]);
// singleNumbers([2, 1, 3, 2]);