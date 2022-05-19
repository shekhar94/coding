// var maximumRemovals = function (s, p, removable) {
//     let removed = new Set();
//     function checkSubSeq(str, p) {
//         function helper(i, j) {
//             if (j < 0) return true;
//             if (i < 0) return false;

//             if (!removed.has(i) && str[i] === p[j]) return helper(i - 1, j - 1);
//             return helper(i - 1, j);
//         }
//         return helper(str.length - 1, p.length - 1);
//     }

//     let res = 0;
//     function binarySearch(l, r) {
//         if (l > r) return;
//         const mid = Math.floor((l + r) / 2);
//         removed = new Set(removable.slice(0, mid + 1));
//         if (checkSubSeq(s, p)) {
//             res = Math.max(res, mid + 1);
//             return binarySearch(mid + 1, r);
//         }
//         return binarySearch(l, mid - 1);
//     }
//     binarySearch(0, removable.length - 1);
//     return res;
// };

var maximumRemovals = function (s, p, removable) {
    let removed = new Set();
    function isSub(s, p) {
        let [si, pi] = [0, 0];
        while (si < s.length && pi < p.length) {
            if (removed.has(si) || s[si] !== p[pi]) {
                si++;
                continue;
            }
            si++; pi++;
        }
        return pi === p.length;
    }

    let res = 0;
    function binarySearch(l, r) {
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            removed = new Set(removable.slice(0, mid + 1));
            if (isSub(s, p)) {
                l = mid + 1;
                res = Math.max(res, mid + 1);
            } else {
                r = mid - 1;
            }
        }
    }
    binarySearch(0, removable.length - 1);
    return res;
}