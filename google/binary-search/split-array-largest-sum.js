var splitArray = function (nums, m) {
    let [l, r] = [Math.max(...nums), nums.reduce((acc, val) => acc + val, 0)];
    let ans = r;

    function canSplit(largest) {
        let subarrayCount = 0;
        let sum = 0;

        for (let n of nums) {
            sum += n;
            if (sum > largest) {
                subarrayCount += 1;
                sum = n;
            }
        }
        return subarrayCount + 1 <= m;
    }

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (canSplit(mid)) {
            ans = mid;
            r = mid - 1;
        } else l = mid + 1;
    }

    return ans;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));