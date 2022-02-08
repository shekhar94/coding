// https://leetcode.com/problems/guess-number-higher-or-lower/

function guess(num) {
    const pick = 6;
    if (num > pick) return -1;
    if (num < pick) return 1;
    if (num === 0) return 0;
}

function guessNumber(n) {
    let s = 1, e = n;

    while (s <= e) {
        const mid = Math.floor((s + e) / 2);
        const guss = guess(mid);
        if (guss === -1) e = mid - 1;
        else if (guss === 1) s = mid + 1;
        else return mid;
    }
}

function main() {
    const n = 10;
    console.log(guessNumber(n));
}

main();