var minimumTotal = function (triangle) {
    const len = triangle.length;

    const dp = new Array(triangle.length + 1).fill(0);

    for (let i = len - 1; i > -1; --i) {
        const arr = triangle[i];
        for (let j = 0; j < arr.length; j++) {
            dp[j] = arr[j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));