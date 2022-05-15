var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 1) return 0;

    intervals.sort((a, b) => a[0] - b[0]);
    let [l, r] = intervals[0];
    let res = 0;
    for (let i = 1; i < intervals.length; i++) {
        const [lc, rc] = intervals[i];
        if (r <= lc) {
            [l, r] = [lc, rc];
            continue;
        } else if (r > rc) [l, r] = [lc, rc];
        res += 1;
    }
    return res;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [-100, -2], [5, 7]]));