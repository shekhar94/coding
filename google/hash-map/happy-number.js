// https://leetcode.com/problems/happy-number/submissions/
function isHappy(n) {
    const map = new Map();
    map.set(n, true);
    while (n != 1) {
        const sum = n.toString()
            .split('')
            .reduce((acc, num) => acc + num ** 2, 0);

        if (map.has(sum)) return false;
        else map.set(sum, true);
        n = sum;
    }
    return true;
}

function main() {
    const n = 19;
    // const n = 2;
    console.log(isHappy(n));
}

main();