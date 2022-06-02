var arrangeCoins = function (n) {
    let [l, r] = [1, n];
    let k = 0;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const totalCoinsReq = (mid * (mid + 1) / 2);

        if (k > mid) break; // stop when mid starts going below current k
        if (totalCoinsReq <= n) k = mid;

        if (totalCoinsReq < n) l = mid + 1
        else r = mid - 1;
    }
    return k;
};