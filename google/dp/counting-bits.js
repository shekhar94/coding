// bit counting approach
function countOne(n) {
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++;
    }
    return count;
}

function countBits(n) {
    const ans = [];
    for (let i = 0; i <= n; i++) {
        ans[i] = countOne(i);
    }
    return ans;
}


// DP approach (More efficient)
function countingBitsDP(n) {
    const ans = [];
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    ans[0] = 0; ans[1] = 1;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) ans[i] = ans[i / 2];
        else ans[i] = ans[Math.floor(i / 2)] + 1;
    }
    return ans;
}

function main() {
    const n = 5;
    console.log(countingBitsDP(n));
}

main();