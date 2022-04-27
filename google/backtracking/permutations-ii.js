var permuteUnique = function (nums) {
    const freq = new Map();
    for (let num of nums) {
        if (!freq.has(num)) freq.set(num, 0);
        freq.set(num, freq.get(num) + 1);
    }

    let perm = [];
    let res = [];

    function dfs() {
        if (nums.length === perm.length) {
            res.push([...perm]);
            return;
        }
        for (let key of [...freq.keys()]) {
            if (freq.get(key) > 0) {
                perm.push(key);
                freq.set(key, freq.get(key) - 1);

                dfs();

                perm.pop();
                freq.set(key, freq.get(key) + 1);
            }
        }
    }

    dfs();
    return res;
};

console.log(permuteUnique([1, 1, 2]));