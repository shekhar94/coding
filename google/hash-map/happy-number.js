// https://leetcode.com/problems/happy-number/submissions/
function isHappy(n) {
    const map = new Map();
    map.set(n, true);
    while (true) {
        const sum = n.toString()
            .split('')
            .map(num => parseInt(num))
            .reduce((acc, num) => {
                acc += num ** 2
                return acc;
            }, 0);

        if (sum === 1) return true;
        if (map.has(sum)) return false;
        else map.set(sum, true);
        n = sum;
    }
}

function main() {
    // const n = 19;
    const n = 2;
    console.log(isHappy(n));
}

main();