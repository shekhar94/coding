function isBadVersion(version) {
    if (version < 4) return false;
    else return true;
}


function solution(isBadVersion) {
    return function (n) {
        let s = 0, e = n;
        while (s <= e) {
            const mid = Math.floor((s + e) / 2);
            const isBad = isBadVersion(mid);

            if (mid - 1 >= 0 && isBad && !isBadVersion(mid - 1)) {
                return mid;
            } else if (isBad) e = mid - 1;
            else s = mid + 1;
        }
    };
}

function main() {
    const n = 5;
    console.log(solution(isBadVersion)(n));
}

main();