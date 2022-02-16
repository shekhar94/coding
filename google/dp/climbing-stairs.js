function climbStairs(n) {
    const DP = [];
    DP[1] = 1;
    DP[2] = 2;
    for (let i = 3; i <= n; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }
    return DP[n];
}

function main() {
    const n = 3;
    console.log(climbStairs(n));
}

main();