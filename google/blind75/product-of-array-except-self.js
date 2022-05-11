// var productExceptSelf = function (nums) {
//     let len = nums.length;
//     let prefix = new Array(len + 2).fill(1);
//     let postfix = new Array(len + 2).fill(1);

//     for (let i = 0; i < len; i++) {
//         prefix[i + 1] = prefix[i] * nums[i];
//     }

//     for (let i = len; i > 0; i--) {
//         postfix[i] = postfix[i + 1] * nums[i - 1];
//     }

//     let res = [];
//     for (let i = 1; i <= len; i++) {
//         res.push(prefix[i - 1] * postfix[i + 1]);
//     }
//     return res;
// };

var productExceptSelf = function (nums) {
    const len = nums.length;
    const res = new Array(len);

    let prefix = 1;
    for (let i = 0; i < len; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = len - 1; i > -1; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));