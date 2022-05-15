var merge = function (intervals) {
    if (intervals.length === 1) return intervals;

    const res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let [l, r] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const [lc, rc] = intervals[i];
        if (r < lc) {
            res.push([l, r]);
            [l, r] = [lc, rc];
        } else { //  (r >= lc)
            [l, r] = [Math.min(l, lc), Math.max(r, rc)];
        }
    }
    res.push([l, r]);
    return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));