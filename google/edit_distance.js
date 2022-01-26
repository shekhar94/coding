function minDistance(A, B) {
    let arr2d = new Array(B.length + 1).fill(undefined);
    arr2d = arr2d.map(() => new Array(A.length + 1).fill(undefined));

    arr2d[0] = arr2d[0].map((val, index) => index);
    arr2d = arr2d.map((val, index) => {
        val[0] = index;
        return val;
    })

    console.log(arr2d);

    for (let i = 1; i < arr2d.length; i++) {
        for (let j = 1; j < arr2d[i].length; j++) {
            if (B[i - 1] === A[j - 1]) {
                arr2d[i][j] = arr2d[i - 1][j - 1];
            } else {
                arr2d[i][j] = Math.min(arr2d[i - 1][j], arr2d[i][j - 1], arr2d[i - 1][j - 1]) + 1;
            }
        }
    }
    console.log(arr2d);
    console.log(arr2d[B.length][A.length]);
}

minDistance("abad", "abac");
// minDistance("abcdef", "azced");
// minDistance("aac", "abac"); // 1