// https://leetcode.com/problems/sqrtx/
function mySqrt(x) {
    let s = 1, e = x;

    while (s <= e) {
        const mid = Math.floor((s + e) / 2);
        if (mid * mid > x) {
            e = mid - 1;
        } else if (mid * mid < x && (mid + 1) * (mid + 1) > x) {
            return mid;
        } else if (mid * mid < x) {
            s = mid + 1;
        } else {
            return mid;
        }
    }
    return 0;
}

function main() {
    // const x = 8;
    const x = 4;
    console.log(mySqrt(x));
}

main();