var rob = function (nums) {
    let rob1 = 0, rob2 = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let tmp = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = tmp;
    }

    return rob2;
};