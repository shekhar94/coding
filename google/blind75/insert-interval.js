var insert = function (intervals, newInterval) {
    const res = [];
    let [nl, nr] = newInterval;
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const [l, r] = interval;
        // new interval comes after current interval 
        // so add the current interval to res
        if (nl > r) res.push(interval);
        // new interval comes before current interval
        // so add newInterval and then append all remaining
        else if (nr < l) {
            res.push([nl, nr]);
            res.push.apply(res, intervals.slice(i));
            return res;
        } else
            [nl, nr] = [Math.min(nl, l), Math.max(nr, r)];
    }
    res.push([nl, nr]);
    return res;
};

// console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
    [4, 8]));