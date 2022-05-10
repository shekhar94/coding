// var canJump = function (nums) {
//     const len = nums.length;
//     let dp = new Array(len).fill(-1);
//     function jump(i) {
//         if (i >= len) return false;
//         if (i === len - 1) return dp[i] = true;
//         if (dp[i] !== -1) return dp[i];

//         const max = nums[i];
//         let p = false;
//         for (let j = 1; j <= max; j++) {
//             p = p || jump(i + j);
//         }
//         return dp[i] = p;
//     }

//     return jump(0);
// };

// Greedy
var canJump = function (nums) {
    const len = nums.length;
    let target = len - 1;
    for (let i = len - 2; i > -1; i--) {
        if (i + nums[i] >= target) target = i;
    }
    return target === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));