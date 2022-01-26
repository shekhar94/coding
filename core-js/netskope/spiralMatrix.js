/*
write a function that return a n x n matrix with the elemens ordered in spiral form
getSprialMatrix(size = 4). The first element starts with number 1

Input:  getSprialMatrix(4);
output: [
  [1,  2,  3,  4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9,  8,  7]
]
*/
// 1, 2, 3, 4(1, 1)(1, 2)
// i = 0, j = 0 j++     i = 1, j = 1 j++
// 5, 6, 7
// i = 0, j = 3 i++     i = 1, j = 2 i++

// i = 3, j = 3 j--     i = 2, j = 2 j--

// i = 3, j = 0 i--     i = 2, j = 1 i--


function printSpiralMatrix(size) {
    let iteration = Math.pow(size, 0.5);
    let current = 1;
    const arr = new Array(size).fill(new Array(size).fill(-1));
    console.log(arr);
    console.log("************");
    for (let itr = 0; itr < iteration && current <= Math.pow(size, 2); itr++) {
        // left to right
        let i = j = itr;
        while (j < size - itr) {
            arr[i][j] = current;
            j++;
            current++;
        }
        console.log("************");
        console.log(arr);
        j--;

        // top to bottom
        while (i < size - itr) {
            i++;
            arr[i][j] = current;
            current++;
        }
        console.log("************");
        console.log(arr);
        i--;
        // right to left
        while (j >= itr) {
            j--;
            arr[i][j] = current;
            current++;
        }
        console.log("************");
        console.log(arr);
        j++;
        // bottom to up
        while (i > itr) {
            i--;
            arr[i][j] = current;
            current++;
        }
        console.log("************");
        console.log(arr);


    }
}

printSpiralMatrix(4);