function findD(A) {

    if (A.length === 0) return 0;
    let prev = 0;

    for (let i = 1; i < A.length; i++) {
        if (A[prev] === A[i]) continue;
        else {
            prev++;
            A[prev] = A[i];
        }
    }
    A.length = prev + 1;
    console.log(A);
    return prev + 1;
}

console.log(findD([1, 1, 2]))
// console.log(findD([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]))