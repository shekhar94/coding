var isPerfectSquare = function (num) {
    let [l, r] = [1, num];

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (mid ** 2 === num) return true;

        if (mid ** 2 > num) r = mid - 1;
        else l = mid + 1;
    }
    return false;
};