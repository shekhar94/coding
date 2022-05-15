// Time O(max(p)*p.length)
var minEatingSpeed = function (piles, h) {
    const range = Math.max(...piles);

    function canEat(k) {
        let hr = 0;
        for (let pile of piles) {
            hr += Math.ceil(pile / k);
            if (hr > h) return false;
        }
        return true;
    }

    let res;
    function binarySearch(l, r) {
        if (l > r) return;
        const mid = Math.floor((l + r) / 2);
        if (canEat(mid)) {
            res = mid;
            binarySearch(l, mid - 1);
        } else binarySearch(mid + 1, r);
    }
    binarySearch(1, range);
    return res;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));