var permute = function (nums) {
    const res = [];

    if (nums.length === 1) return [[...nums]];

    for (let i = 0; i < nums.length; i++) {
        const num = nums.shift();
        const permutations = permute([...nums]);
        for (let per of permutations) {
            per.push(num);
        }
        res.push.apply(res, permutations);
        nums.push(num);
    }

    return res;
};

console.log(permute([1, 2, 3]));