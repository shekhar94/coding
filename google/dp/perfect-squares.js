// Recursive Approach
function numSqRe(n) {
    if (n <= 0) return 0;
    const sqrt = Math.floor(Math.sqrt(n));
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= sqrt; i++) {
        min = Math.min(min, numSqRe(n - i ** 2) + 1);
    }

    return min;
}

// Memoized recursion
let dp = [];

function numSqMemo(n) {
    if (n <= 0) return 0;
    if (dp[n]) return dp[n];
    let sqrt = Math.floor(Math.sqrt(n));

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= sqrt; i++) {
        const reducedN = n - i ** 2;
        dp[reducedN] = numSqMemo(reducedN);
        min = Math.min(min, dp[reducedN] + 1);
    }

    return dp[n] = min;
}


function numSquares(n) {
    return numSqMemo(n);
}

function main() {
    const n = 48; //7168; //12;
    console.log(numSquares(n));
}

main();